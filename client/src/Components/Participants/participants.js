import React from "react";
import { Grid, CircularProgress} from "@material-ui/core";
import { useSelector } from "react-redux";

import Participant from "./Participant/participant.js";

// Styles
import useStyles from "./styles.js"

// functional component
const Participants = () => {
    
    const classes = useStyles();
    const participants = useSelector((state) => state.participants);

    console.log(participants)
    
    // using <Component /> format
    return (
        // If there are no participants, display loading circle
        !participants.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {/* Map the participants, variable length. LOOP OVER THEM */}
                
                {participants.map((participant) => (
                    <Grid key={participant._id} item xs={12} sm={6} md={6}>
                        <Participant participant={participant} />
                    </Grid>
                ))}

            </Grid>
        )
        
    )
}

export default Participants;