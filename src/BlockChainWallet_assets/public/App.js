import React,{useState} from 'react'
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
  const countArr = [10,20,50,100,200,500]
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
      setCurrentCount(0)
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
    <>
      <div>
        <h2 className="title">
          <a href="mailto:noshufu@gmail.com" target="_blank" className="title-author">
            <img src="data:image/jpeg;base64,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" alt=""/>
            NoShuFu
          </a>
          <p>
            Created Ethereum Wallet
          </p>
          <span>V0.0.1</span>
        </h2>
        <hr/>
        <div className="Identity">
          <div className="itemBox">
            {/*<h2 className="label">Identity Wallet <span>(ETH)</span></h2>*/}
            <p className="value">The generated accounts are calculated locally, so a maximum of 200 is recommended for a single generation.</p>
          </div>
          <div className="itemBox">
            <div className="itemBox_title">
              <h3 className="label">Created Number</h3>
              {
                countArr.map(item=>{
                  return (
                      <a href="javascript:;" key={item} onClick={()=>{setCount(item)}}>{item}</a>
                  )
                })
              }
            </div>
            <input className="CountInput" type="text" onChange={(e)=>{setCount(e.target.value)}} value={count}/>
          </div>
          <div>
          <button className="createButton" onClick={create} disabled={loading}>
            {
                loading ? `Is generating，${currentCount}/${count},Automatically export after generation`:'Generate'
            }
          </button>
          </div>
        </div>
        <SessionStorageData data={currentAccounts} download={ExportToExcel} />
        <Reward />
      </div>
      <Footer />
    </>
  );
}

export default App;
