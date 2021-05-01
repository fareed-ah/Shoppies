import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';
import React from 'react'
import { MovieCard } from '../movieCard/MovieCard';
import { Movie } from '../types';

interface RowProps {
    movieData: Movie[],
    handleNomination: (movie: Movie) => void,
    canNominate: (movie: Movie) => boolean,
    isShowingResults: boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            padding: "25px",
        },
        title: {
            color: theme.palette.primary.light,
        },
    }),
);

export const Row: React.FC<RowProps> = ({ movieData, handleNomination, isShowingResults, canNominate }: RowProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                {movieData.map((movie) => (
                    <Grid item key={movie.imdbID} sm={12} md={6} lg={3} xl={1}>
                        <MovieCard handleNomination={handleNomination} canNominate={canNominate} isResults={isShowingResults} movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}