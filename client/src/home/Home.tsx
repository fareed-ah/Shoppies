import { Box, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Container } from 'next/app';
import React from 'react'
import { Category } from '../categories/Category';
import { NavBar } from '../navbar/NavBar';

interface HomeProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        categorySection: {
            paddingLeft: "50px",
            paddingTop: "50px",
        }
    }),
);


export const Home: React.FC<HomeProps> = ({ }) => {
    const classes = useStyles();
    return (
        <Container>
            <NavBar />

            <Box className={classes.categorySection}>
                <Category title="Trending" />
                <Category title="Trending" />
            </Box>

        </Container>
    );
}