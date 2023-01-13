// import MongoDB model
import { Participants, Winners} from "../models/mongoSchema.js";
import mongoose from "mongoose";

export const getParticipants = async (req, res) => {
    try {
        const allParticipants = await Participants.find();
        //console.log(allParticipants);
        res.status(200).json(allParticipants);

    } catch (error) {
        res.send(error);
        console.log(error);
    }
}

export const getWinners = async (req, res) => {
    try {
        const allWinners = await Winners.find();
        //console.log(allParticipants);
        res.status(200).json(allWinners);

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

export const removeParticipant = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Participants.findByIdAndRemove(id);
    console.log(`${id} removed success!`);
    res.json({ message: "Post deleted successfully." });
}

export const removeWinner = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Winners.findByIdAndRemove(id);
    console.log(`${id} removed success!`);
    res.json({ message: "Winner deleted successfully." });
}

export const pickWinner = async (req, res) => {
    
    const allParticipants = await Participants.find();
    const random_number = Math.floor(Math.random() * allParticipants.length)
    const random_winner = allParticipants[random_number]

    console.log(random_winner)
    await Participants.findByIdAndRemove(random_winner._id);

    const newWinner = new Winners({discordID: random_winner.discordID});

    try {
        await newWinner.save();
        res.status(201).json(newWinner);
        console.log("winner create success")
    } catch (error) {
        res.send(error);
        console.log(error);
    }
}