import axios from "axios"; // Fetch library

const url = "http://localhost:5000/giveaway";

// Participants
export const fetchParticipants = () => axios.get(url);
export const createParticipant = (newParticipant) => axios.post(url, newParticipant);
export const removeParticipant = (id) => axios.delete(`${url}/${id}`);

// Winners
export const fetchWinners = () => axios.get(`${url}/winners`);
export const pickWinner = () => axios.get(`${url}/pickWinner`)
