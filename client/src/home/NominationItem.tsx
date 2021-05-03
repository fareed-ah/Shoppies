import { makeStyles, createStyles, Paper, Box, Typography, Zoom, Button, Theme } from '@material-ui/core';
import { Image } from '@material-ui/icons';
import React, { useState } from 'react'
import { Movie } from '../types';

interface NominationItemProps {
    movie: Movie
    rank: number

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        root: {
            backgroundColor: 'transparent',
            [theme.breakpoints.up('sm')]: {
                height: 124,
                width: 80,
            },
            margin: 8,

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
        rank: {
            fontSize: 100,
        },
    }),
);

export const NominationItem: React.FC<NominationItemProps> = ({ movie, rank }: NominationItemProps) => {
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="row">
            <Typography className={classes.rank}>{rank}</Typography>
            <Paper className={classes.root}>
                <img className={classes.image} src={movie.Poster == "N/A" ? "/images/posterAlt.png" : movie.Poster}></img>
                <Box className={classes.text}>
                    <Typography>{movie.Title}</Typography>
                    <Button>Remove</Button>
                </Box>
            </Paper >
        </Box>
    );
}