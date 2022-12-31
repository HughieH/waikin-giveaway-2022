// MongoDB participant schema

import mongoose from "mongoose";

const participantSchema = mongoose.Schema({
    discordID: String,
    dateAdded: {
        type: Date,
        default: new Date()
    }
})

const ParticipantModel = mongoose.model('ParticipantModel', participantSchema);

export default ParticipantModel;