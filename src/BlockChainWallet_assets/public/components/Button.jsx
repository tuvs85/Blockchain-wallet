import React from 'react'
import Button from "@material-ui/core/Button";
export default function CreateButton({loading,currentCount, total,onClick}){
    return (
        <Button style={{width: '375px'}} variant="contained" color="primary" onClick={onClick} disabled={loading}>
            {
                loading ? `Is generating，${currentCount}/${total},Automatically export after generation`:'Generate'
            }
        </Button>
    )
}
