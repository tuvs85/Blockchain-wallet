import {createMnemonic, createSeed} from './createMnemonic'
const Web3 = require('web3');
let web3 = new Web3();
const hdkey = require('ethereumjs-wallet/dist/hdkey').default;
const util = require('ethereumjs-util');
const ethers = require('ethers');
export default function createETHWallet(password){
    //1、生成助记词
    let mnemonic = createMnemonic();
    //2、将助记词转成seed
    let seed = createSeed(mnemonic);
    //3、通过hdkey 将seed生成HD Wallet
    let hdWallet = hdkey.fromMasterSeed(seed);
    //4、生成节点中在m/44'/60'/0'/0/0路径的keypair
    let key = hdWallet.derivePath("m/44'/60'/0'/0/0");
    //5、从keypair中获取私钥
    let privateKey = util.bufferToHex(key._hdkey._privateKey);
    //6、从keypair中获取公钥
    let publicKey = util.bufferToHex(key._hdkey._publicKey);
    //7、使用keypair中的公钥生成地址
    let address = util.pubToAddress(util.toBuffer(publicKey),true);
    address = util.toChecksumAddress(util.bufferToHex(address).toString('hex'));
    //8、生成keystore
    // let keystore = web3.eth.accounts.encrypt(password);
    let form = {
        privateKey,/*私钥*/
        publicKey,/*公钥*/
        address,/*地址*/
        // keystore,
        mnemonic/*明文助记词 - 接口数据用*/
    }
    return form
}
