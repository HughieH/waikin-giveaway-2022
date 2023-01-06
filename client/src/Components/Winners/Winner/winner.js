
import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';

import { removeParticipant } from '../../../actions/participants.js';

// Styles
import useStyles from "./styles.js"

// Images & Gifs
import waikinDab from "../../../images/waikinDab.gif"
import waikinHype from "../../../images/waikinHype.gif"

const WinGifs = [waikinDab, waikinHype]
// functional component
const Winner = ({ winner }) => {
    
    const dispatch = useDispatch();
    const classes = useStyles();
    const winImg = WinGifs[Math.floor(Math.random() * 2)] // pick random gif/image from array

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={winImg} title={winner.discordID} />
            <div className={classes.overlay}>
                <Typography variant="h6">{winner.discordID}</Typography>
            </div>
        </Card>
    )
}

export default Winner;