import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import connectDB from "./db/index.js"
dotenv.config()
const app = express()

connectDB()
app.get("/", (req, res) => {
  res.send("Server is running")
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
    
