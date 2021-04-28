import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Container } from 'next/app';
import React from 'react'
import { Row } from '../categories/Row';
import { NavBar } from '../navbar/NavBar';

interface HomeProps {

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        categorySection: {
            padding: "50px",
        }
    }),
);


export const Home: React.FC<HomeProps> = ({ }) => {
    const classes = useStyles();
    return (
        <Container>
            <NavBar />

            <Container className={classes.categorySection}>
                <Row />
            </Container>

        </Container>
    );
}