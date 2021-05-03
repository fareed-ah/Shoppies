import { makeStyles, createStyles, Paper, Box, Typography, Zoom, Button, Theme } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import React, { useState } from 'react'
import { Movie } from '../types';

interface ResultItemProps {
    movie: Movie
    handleNomination: (movie: Movie) => void
    canNominate: (movie: Movie) => boolean
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        root: {
            backgroundColor: 'transparent',
            [theme.breakpoints.up('sm')]: {
                height: 175,
                width: 130,
            },
            [theme.breakpoints.up('md')]: {
                height: 175 * 1.25,
                width: 130 * 1.5,
            },
            [theme.breakpoints.up('lg')]: {
                height: 175 * 1.5,
                width: 130 * 1.5,
            },

            display: "flex",
            flexDirection: "row",
            "&:hover": {
                transform: "scale3d(1, 1.1, 1) translate(-75px,0px)",
                "& $text": {
                    display: "block",
                },
                "& $image": {
                    borderBottomRightRadius: "0px",
                    borderTopRightRadius: "0px",
                }
            },
        },
        image: {
            borderRadius: "8px",
            width: "100%",
            backgroundColor: 'transparent',
        },

        text: {
            borderBottomRightRadius: "8px",
            borderTopRightRadius: "8px",
            zIndex: 1,
            display: "none",
            background: "#181818",
            color: "#fff",
            width: "100%",
            minWidth: 150,
            height: "100%",
            padding: 8,
            transition: "opacity 300ms ease-out, border-radius 200ms ease-out",
        },
    }),
);

export const ResultItem: React.FC<ResultItemProps> = ({ movie, handleNomination, canNominate }: ResultItemProps) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <img className={classes.image} src={movie.Poster == "N/A" ? "/images/posterAlt.png" : movie.Poster}></img>
            <Box className={classes.text}>
                <Typography>{movie.Title}</Typography>
                <Button disabled={canNominate(movie)} onClick={() => handleNomination(movie)}>NOMINATE</Button>
            </Box>
        </Paper >
    );
}