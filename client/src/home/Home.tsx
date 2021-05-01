import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Row } from '../categories/Row';
import { SearchBar } from '../searchbar/SearchBar';
import { CustomSnackbar } from '../snackbar/CustomSnackbar';
import { CustomTabBar } from '../tabs/CustomTabBar';
import { MaxNominationsExceeded, MaxNominationsReached, Movie, SnackbarMessage } from '../types';

interface HomeProps {

}


export const Home: React.FC<HomeProps> = ({ }) => {
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [nominations, setNominations] = useState<Movie[]>([]);
    const [showResults, setShowResults] = useState(true);
    const [snackbarMessage, setSnackbarMessage] = useState<SnackbarMessage | undefined>();

    useEffect(() => {
        nominations.length == 5 ? addSnackbar( MaxNominationsReached) : ({})
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
        if (nominations.length == 5 && !isNominated(movie)) {
            addSnackbar(MaxNominationsExceeded)
        } else {
            showResults ? addNomination(movie) : removeNomination(movie)
        }
    }

    const canNominate = (movie: Movie) => {
        return showResults && isNominated(movie)
    }

    return (
        <Box display="flex" flexDirection="column" padding={5}>
            < CustomSnackbar
                    message={snackbarMessage}
                    setSnackbarMessage={setSnackbarMessage} />
            <Box flex="1" flexShrink={0} justifyContent="center" alignItems="center" display="flex" flexDirection="column">
                <Typography variant="h3">The Shoppies</Typography>
                <SearchBar setSearchResults={setSearchResults} setSnackbarMessage={setSnackbarMessage} />
            </Box>
            <Box flex="3">
                <Box style={{ paddingLeft: "25px", paddingBottom: "5px" }}>
                    <CustomTabBar setShowResults={setShowResults} />
                </Box>
                <Row handleNomination={handleNomination} canNominate={canNominate} isShowingResults={showResults} movieData={showResults ? searchResults : nominations}></Row>
            </Box>
        </Box>
    );
}