import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Clear } from '@material-ui/icons';
import axios from 'axios';
import { DetailedMovie, SnackbarMessage } from '../types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
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
    setSearchResults: React.Dispatch<React.SetStateAction<DetailedMovie[]>>
    setSnackbarMessage: React.Dispatch<React.SetStateAction<SnackbarMessage | undefined>>
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar: React.FC<SearchBarProps> = ({ setSearchResults, setSnackbarMessage, setSearchQuery }: SearchBarProps) => {
    const classes = useStyles();
    const [title, setTitle] = useState('');

    const handleSubmit = (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
        axios.get(`https://www.omdbapi.com/?apikey=dd016357&s=${title}&type=movie`)

            .then(res => {

                if (res.data.Response == "True") {
                    setSearchResults(res.data.Search);
                    setSearchQuery(title);
                } else {
                    setSearchQuery('');
                    setSearchResults([]);
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
                    setSearchQuery('');
                    setSearchResults([]);
                }}>
                <Clear />
            </IconButton>
        </Paper>
    );
}