// Request Routes

import express from "express";

const router = express.Router();

// localhost:5000/example
// Inside is callback function
router.get('/', (req, res) => {
    res.send("HELLO");
})

export default router;