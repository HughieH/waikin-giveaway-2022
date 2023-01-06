import React from "react";
import { useSelector } from "react-redux";

import Participant from "./Participant/participant.js";

// Styles
import useStyles from "./styles.js"

// functional component
const Participants = () => {
    
    const classes = useStyles();
    const participants = useSelector((state) => state.participants);
    
    return (
        <> {/* React Fragment */}
            <h1> Participants </h1>
            <Participant />
            <Participant />
        </>
        
    )
}

export default Participants;