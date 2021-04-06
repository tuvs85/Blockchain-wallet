import React,{useState} from 'react'
import './App.css';
import ExportToExcel from './utils/ExportToExcel'
import Footer from './components/Footer'
import Reward from './components/Reward'
import SessionStorageData from './components/SessionStorageData'
// import {createBTCWallet, createETHWallet} from './utils/wallet/create'
import {createETHWallet} from './utils/wallet/create'
const walletList = ['ETH']
const createWalletList = {
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
      <div>
        <h1 className="title">Created Block Chain Wallet
          <span>V0.0.1</span>
        </h1>
        <hr/>
        <div className="Identity">
          <div className="itemBox">
            <h2 className="label">Identity Wallet <span>(ETH)</span></h2>
            <p className="value">The generated accounts are calculated locally, so a maximum of 200 is recommended for a single generation.</p>
          </div>
          <div className="itemBox">
            <h3 className="label">Created Number</h3>
            <input className="CountInput" type="text" onChange={(e)=>{setCount(e.target.value)}} value={count}/>
          </div>
          <div>
          <button className="createButton" onClick={create} disabled={loading}>
            {
                loading ? `Is generating，${currentCount}/${total},Automatically export after generation`:'Generate'
            }
          </button>
          </div>
        </div>
        <SessionStorageData data={currentAccounts} download={ExportToExcel} />
        <Reward />
      </div>
      <Footer />
    </div>
  );
}

export default App;
