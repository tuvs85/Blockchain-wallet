import React from 'react';
import QRCode from 'qrcode.react';
import ClipboardJS from 'clipboard'
import './index.css'
let showTimes = null;
export default function Index() {
    const [openMessageAlert, setOpenMessageAlert] = React.useState(false);
    const [rewardList, setRewardList] = React.useState([
        {
            name: 'ETH',
            address: '0x18796AD54e7393F90ae64e9fFA1A2ba6C3999999',
            qrCode: false
        },
        {
            name: 'BTC',
            address: '3MCitSBfq6gjXpWSkfGCGhTom14TCghmtm',
            qrCode: false
        },
        {
            name: 'TRX',
            address: 'TYg4cWXQGP7RnnizSZEXtqmNnsydi3BxbP',
            qrCode: false
        },
        {
            name: 'EOS',
            address: 'mnemonic1234',
            qrCode: false
        }
    ])
    const handleClick = () => {
        setOpenMessageAlert(true);
        clearTimeout(showTimes)
        showTimes = setTimeout(()=>{
            setOpenMessageAlert(false);
        },1000)
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
            {
                openMessageAlert && (
                    <div className="Reward-Snackbar">
                        <span onClose={handleClose}>
                            Copy success
                        </span>
                    </div>
                )
            }

            <h3>Donate & Support</h3>
            <ul aria-label="main mailbox folders">
                {
                    rewardList.map((item, index)=>{
                        return (
                            <li key={item.name}>
                                <p className="rewardAddress">
                                    <label>{item.name}: </label>
                                    {item.address}
                                    <a href="javascript:;" className="copyBtn" data-clipboard-text={item.address}>Copy</a>
                                    <a href="javascript:;" onClick={()=>{
                                        let _rewardList = [...rewardList];
                                        _rewardList[index].qrCode = !_rewardList[index].qrCode;
                                        setRewardList(_rewardList)
                                    }}>QRCode</a>
                                </p>
                                {
                                    item.qrCode && <QRCode
                                        className="qrcode"
                                        value={item.address}
                                        size={100}
                                    />
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
