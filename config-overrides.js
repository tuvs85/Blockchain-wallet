const {
  override,
  addWebpackAlias,
  useBabelRc,
  addWebpackPlugin,
  removeModuleScopePlugin,
} = require("customize-cra");
const path = require("path");
const webpack = require("webpack");
const dfxJson = require("./dfx.json");

let localCanisters, prodCanisters, canisters;
const webEnv = {};

function initCanisterIds() {
  try {
    localCanisters = require(path.resolve(
      ".dfx",
      "local",
      "canister_ids.json"
    ));
  } catch (error) {
    console.log("No local canister_ids.json found. Continuing production");
  }
  try {
    prodCanisters = require(path.resolve("canister_ids.json"));
  } catch (error) {
    console.log("No production canister_ids.json found. Continuing with local");
  }

  const network =
    process.env.DFX_NETWORK ||
    (process.env.NODE_ENV === "production" ? "ic" : "local");

  canisters = network === "local" ? localCanisters : prodCanisters;

  for (const canister in canisters) {
    process.env[canister.toUpperCase() + "_CANISTER_ID"] =
      canisters[canister][network];
    webEnv[`process.env.${canister.toUpperCase() + "_CANISTER_ID"}`] =
      JSON.stringify(canisters[canister][network]);
  }
}

initCanisterIds();

// List of all aliases for canisters. This creates the module alias for
// the `import ... from "@dfinity/ic/canisters/xyz"` where xyz is the name of a
// canister.
const aliases = Object.entries(dfxJson.canisters).reduce(
  (acc, [name, _value]) => {
    // Get the network name, or `local` by default.
    const networkName = process.env["DFX_NETWORK"] || "local";
    const outputRoot = path.join(
      __dirname,
      ".dfx",
      networkName,
      "canisters",
      name
    );

    return {
      ...acc,
      ["dfx-generated/" + name]: path.join(outputRoot, `index.js`),
      buffer: path.resolve(__dirname, "./node_modules/buffer"),
      process: "process/browser.js",
      "canister.did": path.join(outputRoot, name + ".did.js"),
      "@": path.resolve(__dirname, "./src"),
      "ui-component": path.resolve(__dirname, "./src/ui-component"),
      store: path.resolve(__dirname, "./src/store"),
      constants: path.resolve(__dirname, "./src/constants"),
      assets: path.resolve(__dirname, "./src/assets"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      "sdk-core": path.resolve(__dirname, "./src/sdk-core"),
      sdk: path.resolve(__dirname, "./src/sdk"),
      utils: path.resolve(__dirname, "./src/utils"),
    };
  },
  {}
);

module.exports = override(
  removeModuleScopePlugin(),
  addWebpackAlias(aliases),
  useBabelRc(),
  addWebpackPlugin(
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser.js",
    }),
    new webpack.DefinePlugin({
      ...webEnv,
    })
  )
);
