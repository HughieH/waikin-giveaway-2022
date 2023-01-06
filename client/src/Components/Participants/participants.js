import React from "react";
import Participant from "./Participant/participant.js";

// Styles
import useStyles from "./styles.js"

// functional component
const Participants = () => {
    
    const classes = useStyles();
    
    return (
        <> {/* React Fragment */}
            <h1> Participants </h1>
            <Participant />
            <Participant />
        </>
        
    )
}

export default Participants;