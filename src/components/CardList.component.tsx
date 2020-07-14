import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import {Download} from "../stores/Downloads.store";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16),
            },
        },
    }),
);

export default function SimplePaper(props: Download[]) {
    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="column" alignContent="center">
            {props}
        </Box>
    );
}
