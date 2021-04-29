import { Box, createStyles, Icon, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react'
import { Row } from '../categories/Row';
import SearchBar from '../searchbar/SearchBar';

interface HomeProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: "#28D984",
        },
        container: {
            minWidth: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }
    }),
);

export const Home: React.FC<HomeProps> = ({ }) => {
    const classes = useStyles();
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