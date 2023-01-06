// Request Routes

import express from "express";
import { getParticipants, insertParticipant } from "../controllers/handlers.js";

const router = express.Router();

// localhost:5000/example
// Inside is callback function
router.get('/', getParticipants);

router.post('/', insertParticipant);

export default router;