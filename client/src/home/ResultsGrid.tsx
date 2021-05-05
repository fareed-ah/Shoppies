import { createStyles, makeStyles, Box, Typography, Button } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DetailedMovie } from '../types';
import { ResultItem } from './ResultItem';

interface ResultsGridProps {
    handleNomination: (movie: DetailedMovie) => void
    canNominate: (movie: DetailedMovie) => boolean
    searchQuery: string,
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={2} variant="filled" {...props} />;
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

export const ResultsGrid: React.FC<ResultsGridProps> = ({ searchQuery, handleNomination, canNominate }: ResultsGridProps) => {
    const classes = useStyles();
    const [searchResults, setSearchResults] = useState<DetailedMovie[]>([]);
    const [totalResults, setTotalResults] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        if (searchQuery == '') {
            setSearchResults([])
            setTotalResults(0)
            setError(undefined);
            return;
        }
        setPage(1)
    }, [searchQuery])

    useEffect(() => {

        axios.get(`https://www.omdbapi.com/?apikey=dd016357&s=${searchQuery}*&type=movie&page=${page}`)
            .then(res => {
                if (res.data.Response == "True") {

                    return res;
                } else {
                    console.log(res);
                    throw new Error(res.data.Error);
                }
            }).then(async res => {

                let movies: DetailedMovie[] = [];
                let movieIds = [...new Set<number>(res.data.Search.map((movie: DetailedMovie) => movie.imdbID))]
                movies = await Promise.all(movieIds.map(async (id: number) => {
                    let detailRes = await axios.get<DetailedMovie>(`https://www.omdbapi.com/?apikey=dd016357&i=${id}`)
                    return detailRes.data
                }))

                setError(undefined);
                setSearchResults([...new Set(movies)]);
                setTotalResults(res.data.totalResults);
            }).catch((error: Error) => {
                setError(error.message);
                setSearchResults([]);
                setTotalResults(0);
            })
    }, [searchQuery, page]);

    const totalPages = () => {
        return Math.ceil(totalResults / 10)
    }

    const incrementPage = () => {
        setPage(page => (page == totalPages() ? 1 : page + 1))
    }
    const decrementPage = () => {
        setPage(page => (page - 1 == 0 ? totalPages() : page - 1))
    }

    return (
        <Box className={classes.root}>
            <Typography className={classes.body}>{`Search results ${searchQuery != "" ? ("for \"" + searchQuery) + "\"" : ""}`}</Typography>
            <Box display={totalResults == 0 ? "none" : "flex"} flexDirection="row" alignItems="center">
                <Typography className={classes.subtitle}>{`Found ${totalResults} movies`}</Typography>
                <Button disabled={totalPages() <= 1} onClick={decrementPage}>{"<"}</Button>
                <Typography className={classes.subtitle}>{page}</Typography>
                <Button disabled={totalPages() <= 1} onClick={incrementPage}>{">"}</Button>
            </Box>
            {searchResults.map((movie) => (
                <ResultItem key={movie.imdbID} nominated={false} movie={movie} handleNomination={handleNomination} canNominate={canNominate} />
            ))}

            {(error && (searchQuery != '')) &&
                <Alert style={{ maxWidth: "100" }} severity="error">
                    {error}
                </Alert>
            }

        </Box >
    )
}