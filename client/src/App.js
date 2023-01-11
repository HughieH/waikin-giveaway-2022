import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid} from "@material-ui/core"; // component library
import { useDispatch, useSelector } from "react-redux"; // allows us to dispatch a redux action

import { getParticipants, getWinners } from "./redux/actions/actions.js";

// Custom components
import Participants from "./Components/Participants/participants.js"
import Form from "./Components/Form/form.js"

// Styles
import useStyles from "./styles.js"

// Images
import ayaya from "./images/AYAYA.png"

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const participants = useSelector((state) => state.participants);

    // insert multiple fetch request here for winners and participants
    // dependencies include which functions you ONLY call once, by default it keeps calling whenever there is a change
    // function will execute every time our application gets rendered, like when pressing buttons
    useEffect(() => {
        dispatch(getParticipants());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getWinners());
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
                    <Grid container justifyContent="center" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <AppBar className={classes.appParticipants} position="static" color="inherit">
                                <Typography className={classes.heading} variant="h3" align="center">
                                    List of Participants ({participants.length}):
                                </Typography>
                            </AppBar>
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