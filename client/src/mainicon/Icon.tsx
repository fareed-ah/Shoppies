import { Container, createStyles, makeStyles } from '@material-ui/core';
import { Movie } from '@material-ui/icons';
import React from 'react'

interface IconProps {

}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            backgroundColor: "#28D984",
            width: "25px",
            height: "25px",
        },
    }),
);

export const Icon: React.FC<IconProps> = ({ }) => {
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Movie />
        </Container>
    );
}