import { createStyles, makeStyles, Box, Typography, Button } from '@material-ui/core';
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
        },
        subtitle: {
            fontSize: "16px",
            fontWeight: "normal",
            marginBottom: 8,
        },
    }),
);

export const ResultsGrid: React.FC<ResultsGridProps> = ({ searchQuery, handleNomination, canNominate, setSnackbarMessage }: ResultsGridProps) => {
    const classes = useStyles();
    const [searchResults, setSearchResults] = useState<DetailedMovie[]>([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if (searchQuery == '') {
            setSearchResults([])
            return;
        }
        axios.get(`https://www.omdbapi.com/?apikey=dd016357&s=${searchQuery}&type=movie&page=${page}`)
            .then(res => {
                console.log(res)
                if (res.data.Response == "True") {
                    setSearchResults(res.data.Search);
                    setTotalResults(res.data.totalResults);

                } else {
                    setSearchResults([]);
                    setSnackbarMessage({ message: res.data.Error, severity: "error" })
                }
            })
    }, [searchQuery, page]);

    const incrementPage = () => {
        const totalPages = Math.ceil(totalResults / 10)
        setPage(page => (page == totalPages ? 1 : page + 1))
    }
    const decrementPage = () => {
        const totalPages = Math.ceil(totalResults / 10)
        setPage(page => (page - 1 == 0 ? totalPages : page - 1))
    }

    return (
        <Box className={classes.root}>
            <Typography className={classes.body}>{`Search results ${searchQuery != "" ? ("for \"" + searchQuery) + "\"" : ""}`}</Typography>
            <Box hidden={totalResults == 0} display="flex" flexDirection="row">
                <Typography className={classes.subtitle}>{`Found ${totalResults} movies`}</Typography>
                <Button onClick={decrementPage}>{"<"}</Button>
                <Typography className={classes.subtitle}>{page}</Typography>
                <Button onClick={incrementPage}>{">"}</Button>
            </Box>
            {searchResults.map((movie) => (
                <ResultItem key={movie.imdbID} nominated={false} movie={movie} handleNomination={handleNomination} canNominate={canNominate} />
            ))}
        </Box>
    )
}