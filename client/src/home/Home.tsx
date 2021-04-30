import { Box, Button, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { Row } from '../categories/Row';
import { SearchBar } from '../searchbar/SearchBar';
import { CustomSnackbar } from '../snackbar/CustomSnackbar';

interface HomeProps {

}

export type Movie = {
    Title: string,
    Year: string,
    Poster: string,
    imdbID: string,
}

export const Home: React.FC<HomeProps> = ({ }) => {
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [nominations, setNominations] = useState<Movie[]>([]);
    const [showResults, setShowResults] = useState(true);
    const [showSnackbar, setShowSnackbar] = useState(false);

    useEffect(() => {
        nominations.length == 5 ? setShowSnackbar(true) : setShowSnackbar(false)

    }, [nominations]);

    const addNomination = (movie: Movie) => {
        setNominations([...nominations, movie])
    }
    const removeNomination = (movie: Movie) => {
        setNominations(nominations.filter(nominatedMovie => nominatedMovie.imdbID != movie.imdbID))
    }

    const isNominated = (movie: Movie): boolean => {
        return nominations.some(nominatedMovie => nominatedMovie.imdbID === movie.imdbID)
    }

    return (

        <Box display="flex" flexDirection="column" padding={5}>
            <CustomSnackbar isOpen={showSnackbar} />
            <Box flex="1" flexShrink={0} justifyContent="center" alignItems="center" display="flex" flexDirection="column">
                <Typography variant="h3">The Shoppies</Typography>
                <SearchBar setSearchResults={setSearchResults} />
            </Box>
            <Box flex="3">
                <Button variant={showResults ? "contained" : "text"} onClick={() => setShowResults(true)}>Search Results</Button>
                <Button variant={!showResults ? "contained" : "text"} onClick={() => setShowResults(false)}>Nominations</Button>
                <Row isNominated={isNominated} removeNomination={removeNomination} isShowingResults={showResults} movieData={showResults ? searchResults : nominations} addNomination={addNomination}></Row>
            </Box>
        </Box>
    );
}