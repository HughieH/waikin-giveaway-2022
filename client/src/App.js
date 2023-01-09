import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"; // component library
import { useDispatch } from "react-redux"; // allows us to dispatch a redux action

import { getParticipants } from "./actions/participants.js";

// Custom components
import Participants from "./Components/Participants/participants.js"
import Winners from "./Components/Winners/winners.js"
import Form from "./Components/Form/form.js"

// Styles
import useStyles from "./styles.js"

// Images
import ayaya from "./images/AYAYA.png"
import { fetchWinners } from "./api/index.js";

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    // insert multiple fetch request here for winners and participants
    useEffect(() => {
        dispatch(getParticipants());
    }, [dispatch]);


    return (
        <Container maxWidth="lg">
            {/* Main appbar component */}
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Waikin's WOT Giveaway 2023
                </Typography>
                <img className={classes.image} src={ayaya} alt="ayaya" height="60"/>
            </AppBar>
            
            {/* Child components of page */}
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Participants />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                        
                    </Grid>
                </Container>
            </Grow>
        
        </Container>

    )
}

export default App;