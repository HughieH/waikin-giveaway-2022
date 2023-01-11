import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField, Button, Typography, Paper } from "@material-ui/core";
import { createParticipant, pickWinner } from "../../redux/actions/actions.js";

// Styles
import useStyles from "./styles.js"

import Winners from "./Winners/winners";

// functional component
const Form = () => {
    
    const classes = useStyles();
    const [participantData, setParticipantData] = useState({ discordID: "" });
    const dispatch = useDispatch();

    const winners = useSelector((state) => state.winners);
    
    // event handler? "e" is a synthetic event
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(participantData)
        dispatch(createParticipant(participantData))
    }

    const handleWinner = (e) => {
        e.preventDefault();
        console.log("WINNER")
        dispatch(pickWinner())
    }

    // use onCLick event handler for buttons!
    return (
        <Paper className={classes.paper}> {/* Like a div with white background */}
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6"> <b> Add a participant </b> </Typography>
                <TextField
                    name="discordID"
                    variant="outlined"
                    label="discordID"
                    fullWidth
                    value={participantData.discordID}
                    onChange={(e) => setParticipantData({...participantData, discordID: e.target.value})} // uses e as event
                />
                <Button className={classes.button} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Typography variant="h6"> <b> Find a random winner! </b> </Typography>
                <Button className={classes.button} variant="contained" color="secondary" size="large" onClick={handleWinner} fullWidth>New Winner!</Button>
            </form>
            <Typography align="center" variant="h6"> <b> List of Winners ({winners.length}) : </b> </Typography>
            <Grid item xs={12} sm={12}>
                <Winners />
            </Grid>

        </Paper>
    )
}

export default Form;