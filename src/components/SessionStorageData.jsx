import {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
        maxHeight:300,
        overflow: 'auto',
        margin: -20
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center'
    }
}));
export default function SessionStorageData({data, download}){
    const [history, setHistory] = useState([])
    const classes = useStyles();
    useEffect(()=>{
        if (!data)return;
        const _history = [...history, data];
        setHistory(_history)
    }, [data]);
    const handleDownHistory = (item)=>{
        download(item.data,item.name)
    }
    const Time = (time)=>{
        return `${new Date(time).toLocaleTimeString()} ${new Date(time).toLocaleDateString()}`
    }
    return (
            <TableContainer component={Paper}>
                <p>文件数据只进行当前页面缓存，刷新会丢失，请确保你已保存你的创建数据</p>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Number</TableCell>
                            <TableCell align="right">Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {history.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell align="left">{Time(row.createTime)}</TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.data.length}</TableCell>
                                <TableCell align="right">
                                    <Button variant="contained" color="primary" onClick={()=>{handleDownHistory(row)}}>
                                        Download
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}
