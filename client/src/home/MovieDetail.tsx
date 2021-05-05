import { Box, createStyles, makeStyles, Typography, Paper, Grid } from '@material-ui/core';
import React from 'react'
import { DetailedMovie } from '../types';

interface MovieDetailProps {
    movie: DetailedMovie
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            maxWidth: 700,
            maxHeight: 300
        },

        subtitle: {
            color: "#8E8E8E",
        },

        poster: {
            maxHeight: 300
        }

    }),
);

export const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <Grid container spacing={3} alignItems="center">
                <Grid item>
                    <img className={classes.poster} src={movie.Poster == "N/A" ? "/images/posterAlt.png" : movie.Poster} />
                </Grid>
                <Grid item xs={12} sm spacing={2}>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="h6">
                                {movie.Title}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1">
                                {movie.Plot}
                            </Typography>
                            <Typography className={classes.subtitle} variant="body2" >
                                {movie.Genre}
                            </Typography>
                            <Typography className={classes.subtitle} variant="body2" >
                                {movie.Released}
                            </Typography>
                            <Typography className={classes.subtitle} variant="body2" >
                                {movie.Rated}
                            </Typography>
                            <Typography className={classes.subtitle} variant="body2" >
                                {movie.imdbRating}
                            </Typography>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}