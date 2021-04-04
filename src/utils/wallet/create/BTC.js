import { bufToHex } from '../../'
const bitcoin = require('bitcoinjs-lib')
const bip39 = require('bip39');
export default async function createBTCWallet(){
    return new Promise(async (resolve, reject) => {
        let mnemonic = bip39.generateMnemonic(),
            seed = await bip39.mnemonicToSeed(mnemonic),
            root = bitcoin.bip32.fromSeed(seed, bitcoin.networks['bitcoin']),
            keyPair = root.derivePath("m/44'/0'/0'/0/0"),
            privateKey = keyPair.toWIF(),
            publicKey = keyPair.publicKey,
            { address } = bitcoin.payments.p2pkh({ pubkey: publicKey });
        resolve({
            privateKey,
            publicKey: bufToHex(publicKey),
            address,
            mnemonic
        })
    })
}
