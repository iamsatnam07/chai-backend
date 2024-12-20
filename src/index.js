// require('dotenv').config({ path: "./env" });
// as early as possible load the environment variables

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();