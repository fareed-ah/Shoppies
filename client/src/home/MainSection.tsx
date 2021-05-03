import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import { Movie, SnackbarMessage } from '../types';
import { ResultsGrid } from './ResultsGrid';

interface MainSectionProps {
    setSnackbarMessage: React.Dispatch<React.SetStateAction<SnackbarMessage | undefined>>
    handleNomination: (movie: Movie) => void
    canNominate: (movie: Movie) => boolean
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flex: "1.5",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "100px",
            paddingTop: "50px",
            marginRight: "100px",
        },
        heading: {
            fontSize: "64px",
            fontWeight: "bold",
        },
        subheading: {
            fontSize: "24px",
            fontWeight: "lighter",
            color: "#858384",
        },

        body: {
            fontSize: "18px",
            fontWeight: "normal",
            color: "#000000",
        },
        searchbar: {
            width: "700px",
        }
    }),
);

export const MainSection: React.FC<MainSectionProps> = ({ setSnackbarMessage, handleNomination, canNominate }) => {
    const classes = useStyles();

    return (
        <Box className={classes.root} >
            <Typography className={classes.heading}>Welcome to The Shoppies</Typography>
            <Typography className={classes.subheading}>Search for your favourite movies and nominate your <strong>“Top 5”</strong> candidates.</Typography>
            <ResultsGrid setSnackbarMessage={setSnackbarMessage} handleNomination={handleNomination} canNominate={canNominate} />
        </Box>
    );
}