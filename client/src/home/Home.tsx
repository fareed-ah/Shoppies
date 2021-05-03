import { Box, createStyles, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { CustomSnackbar } from '../snackbar/CustomSnackbar';
import { MaxNominationsExceeded, MaxNominationsReached, Movie, SnackbarMessage } from '../types';
import { MainSection } from './MainSection';
import { NominationsSection } from './NominationsSection';

interface HomeProps {

}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: "100%",
            height: "100vh",
            backgroundColor: "#020354",
            color:"#FFF"
        },

        mainSection: {
            flex: "1",
        },
        Section: {
            flex: "1",
        },
    }),
);

export const Home: React.FC<HomeProps> = ({ }) => {
    const [nominations, setNominations] = useState<Movie[]>([]);
    const [snackbarMessage, setSnackbarMessage] = useState<SnackbarMessage | undefined>();
    const classes = useStyles();

    useEffect(() => {
        nominations.length == 5 ? addSnackbar(MaxNominationsReached) : ({})
    }, [nominations]);

    const addNomination = (movie: Movie) => {
        setNominations([...nominations, movie])
    }

    const addSnackbar = (message: SnackbarMessage) => {
        setSnackbarMessage(message)
    }

    const removeNomination = (movie: Movie) => {
        setNominations(nominations.filter(nominatedMovie => nominatedMovie.imdbID != movie.imdbID))
    }

    const isNominated = (movie: Movie): boolean => {
        return nominations.some(nominatedMovie => nominatedMovie.imdbID === movie.imdbID)
    }

    const handleNomination = (movie: Movie) => {
        if (!isNominated(movie)) {
            nominations.length == 5 ? addSnackbar(MaxNominationsExceeded) : addNomination(movie)
        } else if (isNominated(movie)) {
            removeNomination(movie)
        }
    }

    const canNominate = (movie: Movie) => {
        return isNominated(movie)
    }

    return (
        <Box className={classes.root} display="flex" flexDirection="row">
            < CustomSnackbar
                message={snackbarMessage}
                setSnackbarMessage={setSnackbarMessage} />
            <MainSection setSnackbarMessage={setSnackbarMessage} handleNomination={handleNomination} canNominate={canNominate} />
            <NominationsSection nominations={nominations} />
        </Box>
    );

}