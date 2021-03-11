import { bufToHex } from '../../'
const bitcoin = require('bitcoinjs-lib')
const bip39 = require('bip39');
export default async function createBTCWallet(password){
    let network ='bitcoin'; // or 'testnet',不传参数默认为主网
    let mnemonic = bip39.generateMnemonic();
    let seed = await bip39.mnemonicToSeed(mnemonic);
    let root = bitcoin.bip32.fromSeed(seed, bitcoin.networks[network])
    let keyPair = root.derivePath("m/44'/0'/0'/0/0")
    let privateKey = keyPair.toWIF()
    let publicKey = keyPair.publicKey
    let { address } = bitcoin.payments.p2pkh({ pubkey: publicKey });
    return {
        privateKey,
        publicKey:bufToHex(publicKey),
        address,
        mnemonic
    }
}
