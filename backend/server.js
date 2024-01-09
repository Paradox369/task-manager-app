const dotenv = require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const app = express()

// routes
app.get("/", (req, res)=>{
    res.send("hello George")
})

const PORT = process.env.PORT || 5000
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`server running on port: ${PORT}`);
        })
    })
    .catch(error => console.log(error))