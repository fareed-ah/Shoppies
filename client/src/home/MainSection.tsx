import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';

interface MainSectionProps {

}

const useStyles = makeStyles(() =>
    createStyles({

        subheading: {
            fontSize: "24px",
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
        <Box display="flex" flexDirection="column" marginBottom="50px" >
            <Typography className={classes.greenHeading}>The Shoppies</Typography>
            <Typography className={classes.subheading}>Search for your favourite movies and nominate your <strong>Top 5</strong> that will compete to win this years <strong>Shoppy</strong> award.</Typography>
        </Box>
    );
}