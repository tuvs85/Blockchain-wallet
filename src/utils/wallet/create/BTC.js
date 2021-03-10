const bitcoin = require('bitcoinjs-lib'),
    bip39 = require('bip39');
const mnemonic = bip39.generateMnemonic()
// => 'lawsuit adult soul suit ridge daring loop brand urge convince alcohol robust'
bip39.validateMnemonic(mnemonic)
// => true
let network ='bitcoin'; // or 'testnet',不传参数默认为主网
let seed = bip39.mnemonicToSeed(mnemonic),
    root = bitcoin.bip32.fromSeed(seed, bitcoin.networks[network]),
    keyPair = root.derivePath("m/44'/0'/0'/0/0"),
    privateKey = keyPair.toWIF(),    // 私钥：L2tduuvVupopVxJ8tFtmGf5KXxKoaJBRFUKU1VCoTX3dtskwwAhF
    publicKey = keyPair.publicKey,
    { address } = bitcoin.payments.p2pkh({ pubkey: publicKey });
// 地址：12WDVW25gZtY4BYTnfTunGc9SDg1wdWjwg
