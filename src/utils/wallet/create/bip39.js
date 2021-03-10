const bip39 = require('bip39');

export function createMnemonic(){
    return bip39.generateMnemonic()
}
export function createSeed(mnemonic){
    return bip39.mnemonicToSeedSync(mnemonic);
}
