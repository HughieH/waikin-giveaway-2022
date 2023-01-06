// MongoDB participant schema

import mongoose from "mongoose";

const participantSchema = mongoose.Schema({
    discordID: String,
    dateAdded: {
        type: Date,
        default: new Date()
    }
})

// export Mongoose medal based on participant schema, can execute MongoDB queries on this model
const Participants = mongoose.model('Participants', participantSchema);

export default Participants;