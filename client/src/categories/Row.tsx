import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react'

interface RowProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        categoryHeading: {
            color: "#054A49"
        },

    }),
);

export const Row: React.FC<RowProps> = ({ }) => {
    const classes = useStyles()
    return (
        <Box>
            <Typography variant="h2" className={classes.categoryHeading}>Category Name</Typography>
        </Box>
    );
}