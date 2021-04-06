import React,{useEffect, useState} from 'react'
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
            <div>
                <p className="sessionStorageDataTips">File data is only cached on the current page and will be lost after refresh</p>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((row) => (
                            <tr key={row.name}>
                                <td align="left">{Time(row.createTime)}</td>
                                <td align="center">{row.name}</td>
                                <td align="center">{row.data.length}</td>
                                <td align="right">
                                    <button onClick={()=>{handleDownHistory(row)}}>
                                        Download
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
}
