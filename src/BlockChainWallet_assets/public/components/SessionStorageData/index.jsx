import React,{useEffect, useState} from 'react'
import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './index.css'
export default function Index({data, download}){
    const [history, setHistory] = useState([])
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
                <p className="sessionStorageDataTips">文件数据只进行当前页面缓存，刷新后丢失</p>
                <Table className="sessionStorageDataRoot" aria-label="simple table">
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
