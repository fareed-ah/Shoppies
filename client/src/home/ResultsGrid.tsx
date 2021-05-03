import { createStyles, makeStyles, Box, Typography } from '@material-ui/core';
import React from 'react'
import { DetailedMovie } from '../types';
import { ResultItem } from './ResultItem';

interface ResultsGridProps {
    handleNomination: (movie: DetailedMovie) => void
    canNominate: (movie: DetailedMovie) => boolean
    searchResults: DetailedMovie[],
    searchQuery: string,
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
        },
        body: {
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: 8,
        },
    }),
);

export const ResultsGrid: React.FC<ResultsGridProps> = ({ searchResults, searchQuery, handleNomination, canNominate }: ResultsGridProps) => {

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography className={classes.body}>{`Search results ${searchQuery != "" ? ("for \"" + searchQuery) + "\"" : ""}`}</Typography>
            {searchResults.map((movie) => (
                <ResultItem key={movie.imdbID} nominated={false} movie={movie} handleNomination={handleNomination} canNominate={canNominate} />
            ))}
        </Box>
    )
}