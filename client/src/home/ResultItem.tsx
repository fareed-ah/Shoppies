import { makeStyles, createStyles, Paper, Typography, IconButton, Grid, CircularProgress } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DetailedMovie, EmptyMovie } from '../types';

interface ResultItemProps {
    nominated: boolean
    movie: DetailedMovie
    handleNomination: (movie: DetailedMovie) => void
    canNominate: (movie: DetailedMovie) => boolean
}

const useStyles = makeStyles(() =>
    createStyles({

        card: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F2F5F7",
            margin: 6,
            borderColor: "#000",
            border: 1,
        },
        poster: {
            height: 100,
            width: 75,
            borderRadius: 8,
        },
        actionButton: {
            color: "#FFF",
            margin: 8,
            height: 35,
            width: 35,
            backgroundColor: "#33BB87",
        }
    }),
);

export const ResultItem: React.FC<ResultItemProps> = ({ nominated, movie, handleNomination, canNominate }: ResultItemProps) => {
    const classes = useStyles();
    const [detailedMovie, setDetailedMovie] = useState<DetailedMovie>(EmptyMovie);

    useEffect(() => {

        axios.get<DetailedMovie>(`https://www.omdbapi.com/?apikey=dd016357&i=${movie.imdbID}`)
            .then(res => {
                setDetailedMovie(res.data)
            })
    }, [movie]);


    if (detailedMovie == EmptyMovie) {
        return (
            <CircularProgress />
        )
    }

    return (
        <Paper className={classes.card} elevation={0}>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    < IconButton onClick={() => handleNomination(movie)} className={classes.actionButton} disabled={!nominated && canNominate(movie)} component="span" >
                        {nominated ? <Remove /> : <Add />}
                    </IconButton >
                </Grid>
                <Grid item>
                    <img className={classes.poster} src={detailedMovie.Poster == "N/A" ? "/images/posterAlt.png" : detailedMovie.Poster}></img>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                {detailedMovie.Title}
                            </Typography>
                            <Typography variant="body2" >
                                {detailedMovie.Genre}
                            </Typography>
                            <Typography variant="body2" >
                                {detailedMovie.Released}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    );
}