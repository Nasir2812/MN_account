import { Select, FormControl, FormHelperText, InputLabel, MenuItem, } from '@mui/material'
import React from 'react'

const Selects = ({ label, value, handleChange, validation,error, options = [], ...rest }) => {
    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 120 }} error={error}>
                <InputLabel id={`${label}-label`}>{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-error-label"
                    id={`${label}-label`}
                    value={value}
                    onChange={handleChange}
                    color={error ? 'error':'success'}
                    {...rest}
                >
                    <MenuItem value="">
                        <em>Select </em>
                    </MenuItem>
                    {
                        options.map((opt) => {
                            <MenuItem value={opt.value}>{opt.value}</MenuItem>
                        })
                    }
                </Select>
                <FormHelperText>{validation}</FormHelperText>
            </FormControl>
        </>
    )
}
export default React.memo(Selects)