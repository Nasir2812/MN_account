import { Box, TextField } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Inputs = ({ label, value, error, helperText, ...rest }) => {
    const theme = useTheme()
    return (
        <>
            <Box
                component="form"
                noValidate
                autoComplete="off"
            >
                <TextField
                    label={label}
                    value={value}
                    error={!!error}
                    helperText={helperText}
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: error
                                    ? theme.palette.error.main
                                    : theme.palette.successMain
                            }
                        },
                        '& label.Mui-focused': {
                            color: error
                                ? theme.palette.error.main
                                : theme.palette.successMain
                        }
                    }}
                    {...rest}
                />
            </Box>
        </>
    )
}

export default React.memo(Inputs)
