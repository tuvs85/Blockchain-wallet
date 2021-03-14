const ethers = require('ethers');
const bip39 = require('bip39');
export default function createETHWallet(){
    const mnemonic = bip39.generateMnemonic(),seed = ethers.Wallet.fromMnemonic(mnemonic);
    return {
        privateKey:seed.privateKey,
        publicKey:seed.publicKey,
        address:seed.address,
        mnemonic
    }
}
