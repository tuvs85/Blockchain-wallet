import {useState} from 'react'
import './App.css';
import ExportToExcel from './utils/ExportToExcel'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Slider from './components/Slider'
import {createBTCWallet, createETHWallet} from './utils/wallet/create'
const walletList = ['ETH','BTC']
const createWalletList = {
  createBTCWallet,
  createETHWallet
}
function App() {
  const [walletType, setWalletType] = useState(walletList[0]);
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(false)
  async function create(){
    if (!count || count <= 0){
      alert('请输入有效数量')
      return;
    }
    setLoading(true);
    const createWallet = createWalletList[`create${walletType}Wallet`]
    let arr = [];
    for (let z = 0; z<count;z++){
      arr.push(await createWallet());
    }
    if (!arr.length){
      setLoading(false)
      return
    }
    await ExportToExcel(arr,walletType)
    setLoading(false)
  }
  return (
    <Container className="App">
      <FormControl component="fieldset">
        <FormLabel component="legend">身份钱包</FormLabel>
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
          <FormLabel component="legend">生成数量</FormLabel>
          <Slider onChange={setCount} />
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
