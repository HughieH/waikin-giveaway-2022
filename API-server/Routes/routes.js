// Request Routes

import express from "express";
import { getParticipants, insertParticipant, removeParticipant, getWinners, pickWinner, removeWinner } from "../controllers/handlers.js";

const router = express.Router();

// localhost:5000/example
// Inside is callback function
router.get('/', getParticipants);
router.post('/', insertParticipant);
router.delete('/:id', removeParticipant);

router.get('/winners', getWinners)
router.get('/pickWinner', pickWinner)
router.delete('/deleteWinner/:id', removeWinner);

export default router;