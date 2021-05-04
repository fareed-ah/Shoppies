import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React from 'react';
import { DetailedMovie } from '../types';
import { ResultItem } from './ResultItem';

interface NominationsSectionProps {
    nominations: DetailedMovie[]
    handleNomination: (movie: DetailedMovie) => void
    canNominate: (movie: DetailedMovie) => boolean
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={2} variant="filled" {...props} />;
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flex: "1",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            flexGrow: 1,
        },

        heading: {
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: 8,
        },
    }),
);

export const NominationsSection: React.FC<NominationsSectionProps> = ({ nominations, handleNomination, canNominate }: NominationsSectionProps) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} >
            <Typography className={classes.heading}> {nominations.length == 0 ? "You have no nominations" : "Your nominations"}</Typography>
            <Box display="flex" flexDirection="column" flexGrow={1}>
                {nominations.map((movie) => (
                    <ResultItem key={movie.imdbID} nominated={true} movie={movie} handleNomination={handleNomination} canNominate={canNominate} />
                ))}
                {nominations.length == 5 &&
                    <Alert style={{ maxWidth: "100" }} severity="success">
                        You have nominated 5 movies!
                    </Alert>
                }
            </Box>
        </Box >
    );
}