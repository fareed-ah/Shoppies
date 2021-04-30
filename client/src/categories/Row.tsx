import { makeStyles, Theme, createStyles, Grid } from '@material-ui/core';
import React from 'react'
import { Movie } from '../home/Home';
import { MovieCard } from '../movieCard/MovieCard';

interface RowProps {
    movieData: Movie[],
    addNomination: (movie: Movie) => void
    removeNomination: (movie: Movie) => void
    isShowingResults: boolean
    isNominated: (movie: Movie) => boolean
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

export const Row: React.FC<RowProps> = ({ movieData, addNomination, isShowingResults, isNominated, removeNomination }: RowProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                {movieData.map((movie) => (
                    <Grid item key={movie.imdbID} sm={12} md={6} lg={3} xl={1}>
                        <MovieCard removeNomination={removeNomination} isNominated={isNominated} isResults={isShowingResults} movie={movie} addNomination={addNomination} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}