import { Box, Container, createStyles, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { SearchBar } from '../searchbar/SearchBar';
import { CustomSnackbar } from '../snackbar/CustomSnackbar';
import { MaxNominationsExceeded, MaxNominationsReached, DetailedMovie, SnackbarMessage } from '../types';
import { MainSection } from './MainSection';
import { NominationsSection } from './NominationsSection';
import { ResultsGrid } from './ResultsGrid';

interface HomeProps {

}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: "100%",
            height: "100%",
            minHeight: "100vh",
            backgroundColor: "#F2F5F7",
            color: "#000",
            flexGrow: 1,
            padding: "100px",
            display: "flex",
            flexDirection: "row"
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
    const [nominations, setNominations] = useState<DetailedMovie[]>([]);
    const [snackbarMessage, setSnackbarMessage] = useState<SnackbarMessage | undefined>();
    const [searchQuery, setSearchQuery] = useState('');
    const classes = useStyles();

    useEffect(() => {
        nominations.length == 5 ? addSnackbar(MaxNominationsReached) : ({})
    }, [nominations]);

    const addNomination = (movie: DetailedMovie) => {
        setNominations([...nominations, movie])
    }

    const addSnackbar = (message: SnackbarMessage) => {
        setSnackbarMessage(message)
    }

    const removeNomination = (movie: DetailedMovie) => {
        setNominations(nominations.filter(nominatedMovie => nominatedMovie.imdbID != movie.imdbID))
    }

    const isNominated = (movie: DetailedMovie): boolean => {
        return nominations.some(nominatedMovie => nominatedMovie.imdbID === movie.imdbID)
    }

    const handleNomination = (movie: DetailedMovie) => {
        if (!isNominated(movie)) {
            nominations.length == 5 ? addSnackbar(MaxNominationsExceeded) : addNomination(movie)
        } else if (isNominated(movie)) {
            removeNomination(movie)
        }
    }

    const canNominate = (movie: DetailedMovie) => {
        return isNominated(movie)
    }


    return (
        <Box className={classes.root} >
            <Container>
                < CustomSnackbar
                    message={snackbarMessage}
                    setSnackbarMessage={setSnackbarMessage} />

                <Grid container spacing={6} direction="row">
                    <Grid item xs={12}>
                        <MainSection />
                        <SearchBar setSearchQuery={setSearchQuery} />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <ResultsGrid setSnackbarMessage={setSnackbarMessage} searchQuery={searchQuery} handleNomination={handleNomination} canNominate={canNominate} />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <NominationsSection nominations={nominations} handleNomination={handleNomination} canNominate={canNominate} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );

}