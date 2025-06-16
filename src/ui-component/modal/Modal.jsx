import { DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import React from 'react'
import CircularLoader from '../loader/CircularLoader';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Modal = ({ title, onClose, onSubmit, showSubmit = true,
    loading = false }) => {
    return (
        <>

            <BootstrapDialog
                onClose={onClose}
                aria-labelledby="customized-dialog-title"
                open={open}
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
                <DialogActions>
                    {showSubmit && (
                        <Button
                            autoFocus
                            onClick={onSubmit}
                            disabled={loading}
                            startIcon={loading && <CircularLoader size='30px' />}
                        >
                            {loading ? <CircularLoader size='30px' /> : 'Submit'}
                        </Button>
                    )}

                </DialogActions>
            </BootstrapDialog>
        </>
    )
}

export default Modal