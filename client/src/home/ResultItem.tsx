import { makeStyles, createStyles, Paper, Typography, IconButton, Grid } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import { DetailedMovie } from '../types';

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

        },
        nominateButton: {
            backgroundColor: "#33BB87",
        },
        removeButton: {
            backgroundColor: "#D8473D",
        }

    }),
);

export const ResultItem: React.FC<ResultItemProps> = ({ nominated, movie, handleNomination, canNominate }: ResultItemProps) => {
    const classes = useStyles();
    if (movie.imdbID == "tt2283336") {
        console.log(movie)
    }
    return (
        <Paper className={classes.card} elevation={0}>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    < IconButton onClick={() => handleNomination(movie)} className={classes.actionButton + " " + (nominated ? classes.removeButton : classes.nominateButton)} disabled={!nominated && !canNominate(movie)} component="span" >
                        {nominated ? <Remove /> : <Add />}
                    </IconButton >
                </Grid>
                <Grid item>
                    <img className={classes.poster} src={movie.Poster == "N/A" ? "/images/posterAlt.png" : movie.Poster}></img>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                {movie.Title}
                            </Typography>
                            <Typography variant="body2" >
                                {movie.Genre}
                            </Typography>
                            <Typography variant="body2" >
                                {movie.Released}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    );
}