import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { Movie } from '../home/Home';
import { Row } from './Row';

interface CategoryProps {
    title: string,
    movieData: Movie[],
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

export const Category: React.FC<CategoryProps> = ({ title, movieData }: CategoryProps) => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Typography variant="h5" className={classes.categoryHeading}>{title}</Typography>
            <Row movieData={movieData} />
        </Box>
    );
}