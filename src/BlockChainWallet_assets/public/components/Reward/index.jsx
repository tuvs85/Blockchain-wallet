import React from 'react';
import QRCode from 'qrcode.react';
import ClipboardJS from 'clipboard'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './index.css'
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const rewardList = [
    {
        name: 'ETH',
        address: '0x18796AD54e7393F90ae64e9fFA1A2ba6C3999999',
    },
    {
        name: 'USDT',
        address: '0x18796AD54e7393F90ae64e9fFA1A2ba6C3999999',
    },
    {
        name: 'BTH',
        address: '3MCitSBfq6gjXpWSkfGCGhTom14TCghmtm',
    },
    {
        name: 'EOS',
        address: 'mnemonic1234',
    }
  /*  {
        name: 'ATOM',
        address: 'cosmos1zz8vjcacr28ykhfg7k5vk0d2mmfj6pg2qau9th',
    },
    {
        name: 'TRX',
        address: 'TYg4cWXQGP7RnnizSZEXtqmNnsydi3BxbP',
    },
    {
        name: 'CKB',
        address: 'ckb1qyqdqu9647q5e3fcdhld6rvdk4npmcjc3puqt4hw0y',
    },
    {
        name: 'BCH',
        address: 'bitcoincash:qpc035fs4th647ck9srazg4253aw8npvtsds4lgs2d',
    },
    {
        name: 'LTC',
        address: 'LQWR7EBJ9iLn3UBziEHynHE29sRNu1SQ3n',
    },
    {
        name: 'KSM',
        address: 'G4S6ShMQdqtrWkRfoMrPiLexwTv1QV6SjfrmpUEjtYtvN8d',
    },
    {
        name: 'DOT',
        address: '14V7aTcYe46SYPwVrjboduoofyBKu3E44rZbYTBdpBMvMrZy',
    },
    {
        name: 'FIL',
        address: 'f1ir7z37hgon6kl2mhg6dpmovozs42rcpvzwwbsqy',
    },
    {
        name: 'XTZ',
        address: 'tz1fkcTAZrhtvToEnWCBoqCzD8zf6ayDotTc',
    }
    */
]
export default function Index() {
    const [openMessageAlert, setOpenMessageAlert] = React.useState(false);
    const handleClick = () => {
        setOpenMessageAlert(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenMessageAlert(false);
    };
    const clipboard = new ClipboardJS('.copyBtn');
    clipboard.on('success', function(e) {
        handleClick()
    });
    clipboard.on('error', function(e) {
    });
    return (
        <div className="Reward">
            <Snackbar
                open={openMessageAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Copy success
                </Alert>
            </Snackbar>
            <p>If you think this tool helped you,</p>
            <ul aria-label="main mailbox folders">
                {
                    rewardList.map(item=>{
                        return (
                            <li key={item.name}>
                                <label>{item.name}: </label>
                                <p className="rewardAddress copyBtn" data-clipboard-text={item.address}>{item.address}</p>
                                <QRCode
                                    className="qrcode"
                                    value={item.address}
                                    size={100}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
