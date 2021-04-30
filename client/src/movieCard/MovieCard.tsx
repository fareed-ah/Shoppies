import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles, createStyles } from '@material-ui/core';
import React from 'react'
import { Movie } from '../home/Home';

interface MovieCardProps {
    movie: Movie,
    addNomination: (movie: Movie) => void
    removeNomination: (movie: Movie) => void
    isResults: boolean
    isNominated: (movie: Movie) => boolean
}
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: "100%",
            height: "100%",
        },
    }),
);

export const MovieCard: React.FC<MovieCardProps> = ({ movie, addNomination, isResults, isNominated, removeNomination }: MovieCardProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    alt={movie.Title}
                    image={movie.Poster}
                    title={movie.Title}
                    height="200px"
                    style={{ objectFit: "cover" }}
                />
                <CardContent style={{ minHeight: "125px" }}>
                    <Typography gutterBottom variant="body1">
                        {movie.Title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {movie.Year}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                <Button disabled={isResults && isNominated(movie) ? true : false} size="small" color="primary" onClick={() => isResults ? addNomination(movie) : removeNomination(movie)}>
                    {isResults ? "Nominate" : "Remove"}
                </Button>
            </CardActions>
        </Card>
    );
}
