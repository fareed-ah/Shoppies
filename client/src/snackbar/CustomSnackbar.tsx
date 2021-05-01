import { IconButton, Snackbar } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import React, { useEffect } from 'react'
import { SnackbarMessage } from '../types';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

interface SnackbarProps {
    // handleClose: (event: React.SyntheticEvent | React.MouseEvent, reason?: string | undefined) => void
    // isOpen: boolean
    message: SnackbarMessage | undefined
    setSnackbarMessage: React.Dispatch<React.SetStateAction<SnackbarMessage | undefined>>
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const CustomSnackbar: React.FC<SnackbarProps> = ({ message, setSnackbarMessage }) => {

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        setOpen(message != undefined)
    }, [message]);

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
        
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onExited={()=>setSnackbarMessage(undefined)}
            autoHideDuration={6000}
            onClose={handleClose}>
            <Alert onClose={handleClose} severity={message ? message.severity : undefined}>
                {message ? message.message : ""}
            </Alert>
        </Snackbar>
    );
}