import React,{useMemo} from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from "@material-ui/core/Grid";
import {createBTCWallet, createETHWallet} from '../../utils/wallet/create'
import './index.css'
const createWalletList = {
    createBTCWallet,
    createETHWallet
}
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function Index({walletType}){
    const sourceCode = useMemo(()=>{
        const createWallet = createWalletList[`create${walletType}Wallet`]
        console.log(createWallet,'createWallet')
        return createWallet.toString()
    }, [walletType])

    return(
        <Grid item xs={12} sm={12} md={6}>
            <a href="https://github.com/tuvs85/Blockchain-wallet" target="_blank" className="sourcecodeAlert">
                <Alert className="sourcecodeAlert" severity="success" icon={<GitHubIcon />}>
                    <p>本程序代码完全开源，点击查看GitHub仓库完整源码</p>
                </Alert>
            </a>
            <h3>当前 {walletType} 钱包创建源码</h3>
            <pre className="sourcecodePre">
                <code className="sourcecodeCode">
                    {sourceCode}
                </code>
            </pre>
        </Grid>
    )
}
