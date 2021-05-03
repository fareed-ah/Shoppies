import classes from '*.module.css';
import { createStyles, Grid, makeStyles, Paper, Box, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { SearchBar } from '../searchbar/SearchBar';
import { Movie, SnackbarMessage } from '../types';
import { ResultItem } from './ResultItem';

interface ResultsGridProps {
    setSnackbarMessage: React.Dispatch<React.SetStateAction<SnackbarMessage | undefined>>
    handleNomination: (movie: Movie) => void
    canNominate: (movie: Movie) => boolean
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "row",
        },
        body: {
            fontSize: "18px",
            fontWeight: "normal",
            color: "#000000",
        },
    }),
);

export const ResultsGrid: React.FC<ResultsGridProps> = ({ setSnackbarMessage, handleNomination, canNominate }: ResultsGridProps) => {
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={1}>
            <Grid item xs={12}>
                <SearchBar setSearchResults={setSearchResults} setSnackbarMessage={setSnackbarMessage} setSearchQuery={setSearchQuery} />
            </Grid>
            <Grid hidden={searchQuery == ''} item xs={12}>
                <Typography className={classes.body}>{`Reuslts for "${searchQuery}"`}</Typography>
            </Grid>

            {searchResults.map((movie) => (
                <Grid key={movie.imdbID} item>
                    <ResultItem movie={movie} handleNomination={handleNomination} canNominate={canNominate} />
                </Grid>
            ))}
        </Grid>
    );
}