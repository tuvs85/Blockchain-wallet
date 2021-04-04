const ethers = require('ethers');
const bip39 = require('bip39');
export default function createETHWallet(){
    return new Promise(async (resolve, reject) => {
        const mnemonic = bip39.generateMnemonic(),seed = ethers.Wallet.fromMnemonic(mnemonic);
        resolve({
            privateKey:seed.privateKey,
            publicKey:seed.publicKey,
            address:seed.address,
            mnemonic
        })
    })
}
