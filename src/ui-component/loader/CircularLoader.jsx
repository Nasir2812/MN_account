import { CircularProgress } from "@mui/material"

const CircularLoader = ({size,...props}) => {
    return (
        <CircularProgress size={size} {...props} />
    )
}
export default CircularLoader