import { IconButton, Snackbar } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import React from 'react'

interface SnackbarProps {
    handleClose: (event: React.SyntheticEvent | React.MouseEvent, reason?: string | undefined) => void
    isOpen: boolean
}

export const CustomSnackbar: React.FC<SnackbarProps> = ({ handleClose, isOpen }: SnackbarProps) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isOpen}
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