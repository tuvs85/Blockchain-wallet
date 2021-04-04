import toExcel from "./Export2Excel";
// import toJSON from "./Export2Excel";
function formatJson(filterVal, jsonData){
    return jsonData.map(v => filterVal.map(j => v[j]))
}
export default async function ExportToExcel(arr,name, type = 'xlsx'){
    const th = ['address', 'publicKey', 'privateKey', 'mnemonic']
    const filterVal = ['address', 'publicKey', 'privateKey', 'mnemonic']
    const data=formatJson(filterVal, arr);
    if (type === 'xlsx'){
        await toExcel({th,data,fileName:`${name}`,fileType:"xlsx",sheetName:"sheet名"})
    } else {
        // await toJSON({th,data,fileName:`${name}`,fileType:"xlsx",sheetName:"sheet名"})
    }
}
