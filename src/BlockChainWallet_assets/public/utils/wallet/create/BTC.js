import { bufToHex } from '../../'
import {bip32,networks,payments} from'bitcoinjs-lib'
import {generateMnemonic,mnemonicToSeed} from 'bip39';
export default async function createBTCWallet(){
    return new Promise(async (resolve, reject) => {
        let mnemonic = generateMnemonic(),
            seed = await mnemonicToSeed(mnemonic),
            root = bip32.fromSeed(seed, networks['bitcoin']),
            keyPair = root.derivePath("m/44'/0'/0'/0/0"),
            privateKey = keyPair.toWIF(),
            publicKey = keyPair.publicKey,
            { address } = payments.p2pkh({ pubkey: publicKey });
        resolve({
            privateKey,
            publicKey: bufToHex(publicKey),
            address,
            mnemonic
        })
    })
}
