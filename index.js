import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./controllers/message.controller.js";
dotenv.config()

const app = express();
app.use(express.json());


const PORT = process.env.PORT || 4000;

app.listen(4000, async ()=>{
    await connectDb();
    console.log(`server is run on port : ${PORT}`)
})

