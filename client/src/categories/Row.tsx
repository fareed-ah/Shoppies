import { makeStyles, Theme, createStyles, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import React from 'react'
import { Movie } from '../home/Home';

interface RowProps {
    movieData: Movie[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
        title: {
            color: theme.palette.primary.light,
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
    }),
);

export const Row: React.FC<RowProps> = ({ movieData }: RowProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cellHeight={444} cols={7.5}>
                {movieData.map((movie) => (
                    <GridListTile key={movie.imdbID}>
                        <img src={movie.Poster} alt={movie.Title} style={{ height: "100%" }} />
                        <GridListTileBar
                            title={movie.Title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}