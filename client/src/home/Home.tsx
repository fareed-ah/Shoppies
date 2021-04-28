import { Typography } from '@material-ui/core';
import { Container } from 'next/app';
import React from 'react'

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({ }) => {
    return (
        <Container>
            <Typography>Home</Typography>
        </Container>
    );
}