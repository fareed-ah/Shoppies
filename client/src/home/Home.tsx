import { Box, Icon, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { Row } from '../categories/Row';
import { SearchBar } from '../searchbar/SearchBar';

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

    return (
        <Box minHeight="100vh" minWidth="100%">
            <Box justifyContent="center" alignItems="center" display="flex" flexDirection="column" minHeight="50vh" minWidth="100%">
                <Icon />
                <Typography variant="h3">The Shoppies</Typography>
                <SearchBar setSearchResults={setSearchResults} />
            </Box>
            <Box justifyContent="center" alignItems="center" display="flex" flexDirection="column" minHeight="50vh" minWidth="100%">
                <Row movieData={searchResults}></Row>
            </Box>
        </Box>
    );
}