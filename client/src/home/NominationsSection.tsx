import { Box, createStyles, Divider, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Movie } from '../types';
import { NominationItem } from './NominationItem';

interface NominationsSectionProps {
    nominations: Movie[]
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flex: "1",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "50px",
            paddingTop: "50px",
            borderTopLeftRadius: "100px",
            borderBottomLeftRadius: "100px",
            height: "100%",
            flexGrow: 1,
        },

        heading: {
            fontSize: "64px",
            fontWeight: "bold",
        },
    }),
);

export const NominationsSection: React.FC<NominationsSectionProps> = ({ nominations }: NominationsSectionProps) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} >
            <Typography className={classes.heading}>Nominations</Typography>
            <Divider />
            <Box display="flex" flexDirection="column" flexGrow={1}>
                {nominations.map((movie, index) => (
                    <NominationItem movie={movie} rank={index + 1} />
                ))}
            </Box>
        </Box >
    );
}