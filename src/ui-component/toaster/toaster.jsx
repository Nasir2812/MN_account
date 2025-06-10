import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

const Toaster = ({ message, color, title, open: propsOpen, onClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!!propsOpen);
  }, [propsOpen]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
    if (onClose) onClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity={color} variant="filled" onClose={handleClose}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toaster;