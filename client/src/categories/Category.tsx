import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { Row } from './Row';

interface CategoryProps {
    title: string
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            marginBottom: "25px",
        },
        categoryHeading: {
            fontWeight: 700,
        },
    }),
);

export const Category: React.FC<CategoryProps> = ({ title }: CategoryProps) => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Typography variant="h5" className={classes.categoryHeading}>{title}</Typography>
            <Row />
        </Box>
    );
}