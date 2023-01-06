// MongoDB participant schema

import mongoose from "mongoose";

const participantSchema = mongoose.Schema({
    discordID: String,
    dateAdded: {
        type: Date,
        default: new Date()
    }
})

const winnerSchema = mongoose.Schema({
    discordID: String
})

// export Mongoose medal based on participant schema, can execute MongoDB queries on this model
export const Participants = mongoose.model('Participants', participantSchema);
export const Winners = mongoose.model('Winners', winnerSchema);

