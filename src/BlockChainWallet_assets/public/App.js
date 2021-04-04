import React,{useState} from 'react'
import './App.css';
import ExportToExcel from './utils/ExportToExcel'
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Button from './components/Button';
import Slider from './components/Slider'
import SourceCode from './components/SourceCode'
import Reward from './components/Reward'
import SessionStorageData from './components/SessionStorageData'
import {createBTCWallet, createETHWallet} from './utils/wallet/create'
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const walletList = ['ETH','BTC']
const createWalletList = {
  createBTCWallet,
  createETHWallet
}
function App() {
  const [walletType, setWalletType] = useState(walletList[0]);
  const [currentAccounts, setCurrentAccounts] = useState(undefined);
  const [frequency, setFrequency] = useState(1);
  const [count, setCount] = useState(1);
  const [currentCount, setCurrentCount] = useState(0);
  const [loading, setLoading] = useState(false)
  async function create(){
    if (!count || count <= 0){
      alert('请输入有效数量')
      return;
    }
    setLoading(!loading);
    const createWallet = createWalletList[`create${walletType}Wallet`]
    let createWalletTime = null;
    let arr = [];
    await handleCreateWallet(async ()=>{
      let name = `${walletType}-${count}-${frequency}`;
      await ExportToExcel(arr,name);
      setCurrentAccounts({data: arr, name,createTime: Date.now()})
      const _frequency = frequency + 1
      setFrequency(_frequency)
      setLoading(false)
    })
    if (!arr.length){
      setLoading(!loading)
      return
    }
    async function handleCreateWallet(callback){
      clearTimeout(createWalletTime);
      createWalletTime = setTimeout(async ()=>{
        const result = await createWallet()
        arr.push(result)
        setCurrentCount(arr.length)
        if (arr.length < count){
          await handleCreateWallet(callback)
        }else {
          clearTimeout(createWalletTime);
          callback()
        }
      },30)
    }
  }
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Identity Wallet</FormLabel>
            <RadioGroup className="flex-row justify-center" aria-label="gender" name="gender1" value={walletType} onChange={(event)=>setWalletType(event.target.value)}>
              {
                walletList.map(item=>{
                  return (
                      <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                  )
                })
              }
            </RadioGroup>
          </FormControl>
          <Grid container justify="center" direction="column" alignItems="center">
            <Box component="span" m={1}>
              <FormLabel component="legend">Created Number</FormLabel>
              <Slider onChange={setCount} type={walletType} />
            </Box>
          </Grid>
          <Button loading={loading} onClick={create} total={count} currentCount={currentCount}/>
          <Alert style={{margin: '20px'}} severity="warning">
            <p>生成账号为本地计算生成，因此单次生成最大建议200个。</p>
          </Alert>
          <SessionStorageData data={currentAccounts} download={ExportToExcel} />
          <Reward />
        </Grid>
          <SourceCode walletType={walletType} />
      </Grid>
    </div>
  );
}

export default App;
