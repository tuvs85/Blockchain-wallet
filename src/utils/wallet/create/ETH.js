import {Wallet} from 'ethers';
import {generateMnemonic} from 'bip39';
export default function createETHWallet(){
    return new Promise(async (resolve, reject) => {
        const mnemonic = generateMnemonic(),seed = Wallet.fromMnemonic(mnemonic);
        resolve({
            privateKey:seed.privateKey,
            publicKey:seed.publicKey,
            address:seed.address,
            mnemonic
        })
    })
}
