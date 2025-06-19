import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, styled, Typography } from '@mui/material';
import React from 'react'
import CircularLoader from '../loader/CircularLoader';
import CloseIcon from '@mui/icons-material/Close';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Modal = ({ title, maxWidth,open, onClose, children }) => {
    return (
        <>

            <BootstrapDialog
                onClose={onClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth
                maxWidth={maxWidth}
                scroll='paper'
                PaperProps={{
                    sx: {
                        width: {
                            xs: '90%',
                            sm: '80%',
                            md: '70%',
                            lg: '60%',
                        },
                        maxWidth: '100%',
                    },
                }}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    {title}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    {children}
                </DialogContent> 
            </BootstrapDialog>
        </>
    )
}

export default Modal