import { combineReducers } from "redux";

import participants from "./participants.js";
import winners from "./winners.js"

export default combineReducers({
    participants: participants,
    winners: winners
})