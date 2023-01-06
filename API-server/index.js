import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import defaultRoutes from "./Routes/routes.js"

dotenv.config();
const app = express();

// built in middleware function in Express starting from v4.16.0. It parses incoming JSON requests and puts the parsed data in req.body
// app.use(express.json())

app.use(cors());

// app.use() includes middleware functions
app.use("/giveaway", defaultRoutes); // 1st param: starting path, 2nd param: Routes
//app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


const MONGO_CONNECTION = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.okq9tb4.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

// Connect to mongoDB cluster on the cloud
mongoose.connect(MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`))) // ultilize promises
    .catch((error) => {
        console.log("ERROR!!!")
        console.log(error.message)});

mongoose.set('strictQuery', true);
