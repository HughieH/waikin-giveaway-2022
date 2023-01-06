// import MongoDB model
import Participants from "../models/mongoSchema.js";

export const getParticipants = async (req, res) => {
    try {
        const allParticipants = await Participants.find();
        res.status(200).json(allParticipants);

    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

export const insertParticipant = (req, res) => {
    res.send("test")
}