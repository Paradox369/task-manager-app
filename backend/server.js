const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoute");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/tasks", taskRoutes);

// routes
app.get("/", (req, res) => {
    res.send("hello George");
});

const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`db connected and server running on port: ${PORT}`);
        });
    })
    .catch((error) => console.log(error));
