
import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import { removeParticipant } from '../../../actions/participants.js';

// Styles
import useStyles from "./styles.js"

// Images & Gifs
import copium from "../../../images/copium.webp"
import qbPoint from "../../../images/qbPoint.png"
import qbRage from "../../../images/qbRage.gif"
import qbSoBad from "../../../images/qbSoBad.gif"
import qbExplain from "../../../images/qbExplain.gif"

const noneWinGifs = [copium, qbPoint, qbRage, qbSoBad, qbExplain]

// functional component
const Participant = ({ participant }) => {
    
    const dispatch = useDispatch();
    const classes = useStyles();
    const noneWinImg = noneWinGifs[Math.floor(Math.random() * 5)] // pick random gif/image from array

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={noneWinImg} title={participant.discordID} />
            <div className={classes.overlay}>
                <Typography variant="h6">{participant.discordID}</Typography>
            </div>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(removeParticipant(participant._id))}><DeleteIcon fontSize="small" />Delete</Button>
            </CardActions>
        </Card>
    )
}

export default Participant;