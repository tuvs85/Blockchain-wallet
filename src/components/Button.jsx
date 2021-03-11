import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
const LoadingButton = withStyles({
    root: {
        width: 375
    }
})(Button)
export default function CreateButton({loading,currentCount, total,onClick}){

    return (
        <LoadingButton variant="contained" color="primary" onClick={onClick} disabled={loading}>
            {
                loading ? `生成导出中，${currentCount}/${total}`:'生成'
            }
        </LoadingButton>
    )
}
