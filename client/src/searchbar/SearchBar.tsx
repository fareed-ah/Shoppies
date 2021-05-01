import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Clear } from '@material-ui/icons';
import axios from 'axios';
import { Movie, SnackbarMessage } from '../types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            margin: '25px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);

interface SearchBarProps {
    setSearchResults: React.Dispatch<React.SetStateAction<Movie[]>>
    setSnackbarMessage: React.Dispatch<React.SetStateAction<SnackbarMessage | undefined>>
}

export const SearchBar: React.FC<SearchBarProps> = ({ setSearchResults, setSnackbarMessage }: SearchBarProps) => {
    const classes = useStyles();
    const [title, setTitle] = useState('');

    const handleSubmit = (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
        axios.post(`https://www.omdbapi.com/?apikey=dd016357&s=${title}`)

            .then(res => {
                console.log(res);
                console.log(res.data);
                if (res.data.Response=="True") {
                    const movies = res.data.Search;
                    setSearchResults(movies);
                } else {
                    setSnackbarMessage({ message: res.data.Error, severity: "error" })
                }
            })
    };

    return (
        <Paper component="form" onSubmit={handleSubmit} className={classes.root}>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                onChange={(e) =>
                    setTitle(e.currentTarget.value)
                }
                value={title}
                className={classes.input}
                placeholder="Search for a movie"
            />
            <IconButton type="reset" className={classes.iconButton}
                onClick={() => {
                    setTitle('')
                    setSearchResults([]);
                }}>
                <Clear />
            </IconButton>
        </Paper>
    );
}