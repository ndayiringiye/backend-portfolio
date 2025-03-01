import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./controllers/message.controller.js";
import messageRoutes from "./routes/message.route.js"
dotenv.config()

const app = express();
app.use(express.json());
app.use("/api/message", messageRoutes)


const PORT = process.env.PORT || 4000;

app.listen(4000, async ()=>{
    await connectDb();
    console.log(`server is run on port : ${PORT}`)
})

