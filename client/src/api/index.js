import axios from "axios"; // Fetch library

const url = "http://localhost:5000/giveaway";

export const fetchParticipants = () => axios.get(url);
export const fetchWinners = () => axios.get(`${url}/winners`);
export const createParticipant = (newParticipant) => axios.post(url, newParticipant);
export const removeParticipant = (id) => axios.delete(`${url}/${id}`);
