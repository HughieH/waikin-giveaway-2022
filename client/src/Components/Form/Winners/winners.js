import React from "react";
import { Grid, CircularProgress} from "@material-ui/core";
import { useSelector } from "react-redux";

import Winner from "./Winner/winner.js";

// Styles
import useStyles from "./styles.js"

// functional component
const Winners = () => {
    
    const classes = useStyles();
    const winners = useSelector((state) => state.winners);

    console.log(winners)
    
    // using <Component /> format
    return (
        // If there are no participants, display loading circle
        !winners.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={2}>
                {/* Map the winners, variable length. LOOP OVER THEM */}
                
                {winners.map((winner) => (
                    <Grid key={winner._id} item xs={12} sm={12} md={6}>
                        <Winner winner={winner} />
                    </Grid>
                ))}

            </Grid>
        )
        
    )
}

export default Winners;