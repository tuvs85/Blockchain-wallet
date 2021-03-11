import toExcel from "./Export2Excel";
function formatJson(filterVal, jsonData){
    return jsonData.map(v => filterVal.map(j => v[j]))
}
export default async function ExportToExcel(arr,name){
    const th = ['地址', '公钥', '私钥', '助记词']
    const filterVal = ['address', 'publicKey', 'privateKey', 'mnemonic']
    const data=formatJson(filterVal, arr);
    await toExcel({th,data,fileName:`${name}账号`,fileType:"xlsx",sheetName:"sheet名"})
}
