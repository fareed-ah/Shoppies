import { createStyles, makeStyles, Box, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DetailedMovie, SnackbarMessage } from '../types';
import { ResultItem } from './ResultItem';

interface ResultsGridProps {
    handleNomination: (movie: DetailedMovie) => void
    canNominate: (movie: DetailedMovie) => boolean
    searchQuery: string,
    setSnackbarMessage: React.Dispatch<React.SetStateAction<SnackbarMessage | undefined>>
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

export const ResultsGrid: React.FC<ResultsGridProps> = ({ searchQuery, handleNomination, canNominate, setSnackbarMessage }: ResultsGridProps) => {
    const classes = useStyles();
    const [searchResults, setSearchResults] = useState<DetailedMovie[]>([]);

    useEffect(() => {
        if (searchQuery == '') {
            return;
        }
        axios.get(`https://www.omdbapi.com/?apikey=dd016357&s=${searchQuery}&type=movie`)
            .then(res => {
                if (res.data.Response == "True") {
                    setSearchResults(res.data.Search);

                } else {
                    setSearchResults([]);
                    setSnackbarMessage({ message: res.data.Error, severity: "error" })
                }
            })
    }, [searchQuery]);


    return (
        <Box className={classes.root}>
            <Typography className={classes.body}>{`Search results ${searchQuery != "" ? ("for \"" + searchQuery) + "\"" : ""}`}</Typography>
            {searchResults.map((movie) => (
                <ResultItem key={movie.imdbID} nominated={false} movie={movie} handleNomination={handleNomination} canNominate={canNominate} />
            ))}
        </Box>
    )
}