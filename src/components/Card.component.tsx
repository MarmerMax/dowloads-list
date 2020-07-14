import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Box} from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import {Download} from "../stores/Downloads.store";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CloseIcon from '@material-ui/icons/Close';
import {toJS} from "mobx";


interface Props {
    download: Download,
    removeItem: Function
}

const Card = ({download, removeItem}: Props) => {

    const classes = useStyles();
    const {title, description, url, image} = download;



    return (
        <Paper className={classes.root}>
            <Box>
                <CardMedia
                    className={classes.cover}
                    image={image}
                    title="Live from space album cover"/>
            </Box>
            <Box>
                <CardContent >
                    <Typography component="h5" variant="h5" className={classes.text}>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" className={classes.text}>
                        {description}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" className={classes.text}>
                        {url}
                    </Typography>
                </CardContent>
            </Box>
            <Box>
                <CloseIcon className={classes.closeButton} onClick={() => removeItem()}/>
            </Box>
        </Paper>
    )
};

export default Card;

const useStyles = makeStyles({
    root: {
        width: '100%',
        margin: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px'
    },
    cover: {
        width: '150px',
        height: '100%'
    },
    content: {
        // flex: '1 0 auto',
        // wordBreak: 'break-all',
        // width: '100%'
    },
    text: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        width: '300px'
    },
    closeButton: {
        cursor: 'pointer'
    }
});