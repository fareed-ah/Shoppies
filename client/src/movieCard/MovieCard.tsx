import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles, createStyles, Divider } from '@material-ui/core';
import React from 'react'
import { Movie } from '../home/Home';

interface MovieCardProps {
    movie: Movie,
    handleNomination: (movie: Movie) => void,
    canNominate: (movie: Movie) => boolean,
    isResults: boolean,
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: "100%",
            height: "100%"
        },
    }),
);

export const MovieCard: React.FC<MovieCardProps> = ({ movie, isResults, canNominate, handleNomination }: MovieCardProps) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    alt={movie.Title}
                    image={movie.Poster === "N/A" ? "/images/posterAlt.png" : movie.Poster}
                    title={movie.Title}
                    height="200px"
                    style={{ objectFit: "cover" }}
                />
                <CardContent style={{ minHeight: "130px" }}>
                    <Typography gutterBottom variant="body1">
                        {movie.Title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {movie.Year}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider orientation="horizontal" />
            <CardActions >
                <Button disabled={canNominate(movie)} size="small" color="primary" onClick={() => handleNomination(movie)}>
                    {isResults ? "Nominate" : "Remove"}
                </Button>
            </CardActions>
        </Card>
    );
}
