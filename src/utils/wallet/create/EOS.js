const Web3 = require('web3');
let web3 = new Web3();
const bip39 = require('bip39');
const hdkey = require('ethereumjs-wallet/dist/hdkey').default;
import eosEcc from 'eosjs-ecc';

export default function createEOSWallet(password){
    let mnemonic = bip39.generateMnemonic();
    let privateKey = eosEcc.seedPrivate(mnemonic);
    let publicKey  = eosEcc.privateToPublic(privateKey);


    return {
        mnemonic,
        privateKey,
        publicKey
    }
}
