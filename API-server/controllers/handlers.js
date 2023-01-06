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

export const insertParticipant = async (req, res) => {
    
    const participant = req.body;
    console.log(req.body)
    const newParticipant = new Participants(participant);
    
    try {
        await newParticipant.save();
        res.status(201).json(newParticipant);
        console.log("create success")
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}