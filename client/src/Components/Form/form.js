import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import { createParticipant } from "../../actions/participants.js";

// Styles
import useStyles from "./styles.js"


// functional component
const Form = () => {
    
    const classes = useStyles();
    const [participantData, setParticipantData] = useState({ discordID: "" });
    const dispatch = useDispatch();
    
    // event handler? "e" is a synthetic event
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(participantData)
        dispatch(createParticipant(participantData))
    }

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
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default Form;