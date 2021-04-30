import { IconButton, Snackbar } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import React, { useEffect } from 'react'

interface SnackbarProps {
    isOpen: boolean,
}

export const CustomSnackbar: React.FC<SnackbarProps> = ({ isOpen }: SnackbarProps) => {
    const [open, setOpen] = React.useState(isOpen);

    useEffect(() => {
        setOpen(isOpen)

    }, [isOpen]);

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    
    return (

        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="You have nominated 5 movies!"
            action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <Clear fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
        />
    );
}