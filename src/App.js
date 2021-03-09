import {useState} from 'react'
import './App.css';
import toExcel from './Export2Excel'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
const Web3 = require('web3');
let web3 = new Web3();
const bip39 = require('bip39');
const hdkey = require('ethereumjs-wallet/dist/hdkey').default;
const util = require('ethereumjs-util');
const ethers = require('ethers');
function formatJson(filterVal, jsonData){
  return jsonData.map(v => filterVal.map(j => v[j]))
}
function createWallet(password){
  /*
        * 使用web3 创建节点.
        * web3js文档: https://web3js.readthedocs.io/
        *
        * */
  //1、生成助记词
  let mnemonic = bip39.generateMnemonic();
  //2、将助记词转成seed
  let seed = bip39.mnemonicToSeedSync(mnemonic);
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
const walletList = ['ETH','BTC','ATOM','EOS','TRX','CKB','BCH','LTC','KSM','DOT','FIL','XTZ']
function App() {
  const [walletType, setWalletType] = useState(walletList[0]);
  const handleChange = (event) => {
    setWalletType(event.target.value);
  };
  const [count, setCount] = useState('');
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  async function ExportToExcel(arr){
    const th = ['地址', '公钥', '私钥', '助记词']
    const filterVal = ['address', 'publicKey', 'privateKey', 'mnemonic']
    var data=formatJson(filterVal, arr);
    await toExcel({th,data,fileName:"ETH账号",fileType:"xlsx",sheetName:"sheet名"})
    setLoading(false)
  }
  async function create(){
    if (!count || count <= 0){
      alert('请输入有效数量')
      return;
    }
    setLoading(true);
    let arr = [];
    for (let z = 0; z<count;z++){
      arr.push(createWallet(password));
    }
    await ExportToExcel(arr)
  }
  return (
    <Container className="App">
      <FormControl component="fieldset">
        <FormLabel component="legend">身份钱包</FormLabel>
        <RadioGroup className="flex-row justify-center" aria-label="gender" name="gender1" value={walletType} onChange={handleChange}>
          {
            walletList.map(item=>{
              return (
                  <FormControlLabel value={item} control={<Radio />} label={item} />
              )
            })
          }
        </RadioGroup>
      </FormControl>
      <Grid container justify="center" direction="column" alignItems="center">
        <Box component="span" m={1}>
          <TextField label="生成数量" type="number" placeholder='请输入生成数量' value={count} onChange={(event=>setCount(event.target.value))} />
        </Box>
        <Box component="span" m={1}>
          <TextField label="KeyStore密码" type="text" value={password} onChange={(event=>setPassword(event.target.value))}/>
        </Box>
      </Grid>
      <Button variant="contained" color="primary" onClick={create} disabled={loading}>
        {
          loading ? '生成导出中，':'生成'
        }
      </Button>
      <p>注意：单次不要超过200个账户生成</p>
    </Container>
  );
}

export default App;
