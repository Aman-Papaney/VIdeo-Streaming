import express from "express";
import "dotenv/config"
import connectDB from "./misc/connectDb.js";
import userModel from "./models/userModel.js";

const app = express()

connectDB()

app.get("/", (req, res) => {
    res.json({message:"gggg"})
    
})

app.listen(3000, () => {
    console.log(`Server Running at http://localhost:${process.env.SERVER_PORT}/`);
    
})