import { makeStyles, createStyles, Paper, Typography, IconButton, Grid, Modal } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import { DetailedMovie } from '../types';
import { MovieDetail } from './MovieDetail';

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
        },
        poster: {
            height: 100,
            width: 75,
            borderRadius: 8,
            transition: "transform 100ms ease- out, border- radius 200ms ease - out",
            "&:hover": {
                transform: "scale3d(1.05, 1.05, 1)",
            },
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
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                    <Paper onClick={handleOpen} className={classes.poster}>
                        <img className={classes.poster} src={movie.Poster == "N/A" ? "/images/posterAlt.png" : movie.Poster}></img>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="subtitle1">
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
            <Modal
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <MovieDetail movie={movie} />
            </Modal>
        </Paper >
    );
}