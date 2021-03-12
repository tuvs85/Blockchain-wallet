import {useMemo} from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import MuiAlert from '@material-ui/lab/Alert';
import Grid from "@material-ui/core/Grid";
import {createBTCWallet, createETHWallet} from '../utils/wallet/create'
import {makeStyles} from "@material-ui/core";
const createWalletList = {
    createBTCWallet,
    createETHWallet
}
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    pre: {
        textAlign: 'left',
        background: '#ddd',
        padding: 20,
        borderRadius: 20,
        fontSize: '16px'
    },
    code: {
        color: '#000',
        wordBreak:'break-all',
        whiteSpace: 'pre-wrap',
        lineHeight: '20px'
    },
    alert: {
        height: 30,
        padding: 10
    }
}));
export default function SourceCode({walletType}){
    const classes = useStyles();
    const sourceCode = useMemo(()=>{
        const createWallet = createWalletList[`create${walletType}Wallet`]
        console.log(createWallet,'createWallet')
        return createWallet.toString()
    }, [walletType])

    return(
        <Grid item xs={12} sm={12} md={6}>
            <a href="https://github.com/tuvs85/Blockchain-wallet" target="_blank" className={classes.alert}>
                <Alert className={classes.alert} severity="success" icon={<GitHubIcon />}>
                    <p>本程序代码完全开源，</p>
                </Alert>
            </a>
            <h3>当前 {walletType} 钱包创建源码</h3>
            <pre className={classes.pre}>
                <code className={classes.code}>
                    {sourceCode}
                </code>
            </pre>
        </Grid>
    )
}
