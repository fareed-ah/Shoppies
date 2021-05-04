import { Box, Container, createStyles, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import { SearchBar } from '../searchbar/SearchBar';
import { DetailedMovie } from '../types';
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
            padding: "50px",
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
    const [searchQuery, setSearchQuery] = useState('');
    const classes = useStyles();

    const addNomination = (movie: DetailedMovie) => {
        setNominations([...nominations, movie])
    }

    const removeNomination = (movie: DetailedMovie) => {
        setNominations(nominations.filter(nominatedMovie => nominatedMovie.imdbID != movie.imdbID))
    }

    const isNominated = (movie: DetailedMovie): boolean => {
        return nominations.some(nominatedMovie => nominatedMovie.imdbID === movie.imdbID)
    }

    const handleNomination = (movie: DetailedMovie) => {
        if (!isNominated(movie)) {
            addNomination(movie)
        } else if (isNominated(movie)) {
            removeNomination(movie)
        }
    }

    const canNominate = (movie: DetailedMovie) => {
        return nominations.length < 5 && !isNominated(movie)
    }

    return (
        <Box className={classes.root} >
            <Container>

                <Grid container spacing={6} direction="row">
                    <Grid item xs={12}>
                        <MainSection />
                        <SearchBar setSearchQuery={setSearchQuery} />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <ResultsGrid searchQuery={searchQuery} handleNomination={handleNomination} canNominate={canNominate} />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <NominationsSection nominations={nominations} handleNomination={handleNomination} canNominate={canNominate} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );

}