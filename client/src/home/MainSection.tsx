import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';

interface MainSectionProps {

}

const useStyles = makeStyles(() =>
    createStyles({

        subheading: {
            fontSize: "18px",
            fontWeight: "lighter",
            color: "#858384",
        },

        greenHeading: {
            fontSize: "54px",
            fontWeight: "bold",
            color: "#21C57D",
        },
    }),
);

export const MainSection: React.FC<MainSectionProps> = () => {
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="column" marginBottom="25px" >
            <Typography className={classes.greenHeading}>The Shoppies</Typography>
            <Typography className={classes.subheading}>Search for your favourite movies and nominate the <strong>Top 5</strong> that are worthy of earning a <strong>Shoppy</strong> award.</Typography>
        </Box>
    );
}