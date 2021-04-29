import { Box, Icon, Typography } from '@material-ui/core';
import React from 'react'
import SearchBar from '../searchbar/SearchBar';

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({ }) => {
    return (
        <Box minHeight="100vh" minWidth="100%">
            <Box justifyContent="center" alignItems="center" display="flex" flexDirection="column" minHeight="50vh" minWidth="100%">
                <Icon />
                <Typography variant="h3">Shoppies</Typography>
                <SearchBar />
            </Box>
        </Box>
    );
}