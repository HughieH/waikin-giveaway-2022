import axios from "axios"; // Fetch library

const url = "http://localhost:5000/giveaway";

export const fetchParticipants = () => axios.get(url);