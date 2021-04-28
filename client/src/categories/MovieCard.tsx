import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from 'next/app'
import React from 'react'

interface MovieCardProps {

}


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        card: {
            backgroundColor: "#054A49"
        },

    }),
);

export const MovieCard: React.FC<MovieCardProps> = ({ }) => {
    const classes = useStyles();
    return (
        <div>
            <Container>

            </Container>
        </div>
    );
}