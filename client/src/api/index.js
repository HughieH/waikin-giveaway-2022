import axios from "axios"; // Fetch library

const url = "http://localhost:5000/giveaway";

export const fetchParticipants = () => axios.get(url);
export const createParticipant = (newParticipant) => {
    //  console.log(newParticipant);
    axios.post(url, newParticipant);}