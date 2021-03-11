const hdkey = require('ethereumjs-wallet/dist/hdkey').default;
const util = require('ethereumjs-util');
const ethers = require('ethers');
const bip39 = require('bip39');
export default function createETHWallet(password){
    //1、生成助记词
    let mnemonic = bip39.generateMnemonic()
    let seed = ethers.Wallet.fromMnemonic(mnemonic),
        privateKey = seed.privateKey,
        address = seed.address,
        publicKey = seed.publicKey;
    //8、生成keystore
    // let keystore = web3.eth.accounts.encrypt(password);
    return {
        privateKey,/*私钥*/
        publicKey,/*公钥*/
        address,/*地址*/
        // keystore,
        mnemonic/*明文助记词 - 接口数据用*/
    }
}
