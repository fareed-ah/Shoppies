import { AppBar, Container, createStyles, makeStyles, TextField, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

interface NavBarProps {
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        searchbar: {
            alignSelf: "center",
            minWidth: "250px",
        },
        title: {
            font: "Myriad",
            fontWeight: 'bold',
        },
        appbar: {
            display: "flex",
            flexDirection: "row",
        },
    }),
);

export const NavBar: React.FC<NavBarProps> = ({ }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar className={classes.appbar} color="inherit">
                    <Container>
                        <Typography variant="h6" className={classes.title}>
                            shoppies
                     </Typography>

                        <TextField
                            id="search-bar"
                            placeholder="Search for a movie..."
                            size="small"
                            className={classes.searchbar}
                        />
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    );
}