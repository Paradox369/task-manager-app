const express = require("express")

const app = express()

// routes
app.get("/", (req, res)=>{
    res.send("hello George")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`);
})