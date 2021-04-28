import { AppBar, createStyles, makeStyles, TextField, Theme, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import SearchBar from "material-ui-search-bar"

interface NavBarProps {
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            alignSelf: "flex-end",
        },
        title: {
            flexGrow: 1,
            font: "Myriad",
            fontWeight: 'bold',
        },
        appbar: {

        },
    }),
);

export const NavBar: React.FC<NavBarProps> = ({ }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar className={classes.appbar} color="inherit">
                    <Typography variant="h6" className={classes.title}>
                        shoppies
                     </Typography>
                    <TextField
                        id="search-bar"
                        placeholder="Search..."
                        size="medium"
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}