import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Clear } from '@material-ui/icons';

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
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }: SearchBarProps) => {
    const classes = useStyles();
    const [title, setTitle] = useState('');

    const handleSubmit = (evt: { preventDefault: () => void; }) => {
        evt.preventDefault();
        setSearchQuery(title);
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
                }}>
                <Clear />
            </IconButton>
        </Paper>
    );
}