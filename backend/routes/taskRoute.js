const express = require("express");
const router = express.Router();
const {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
} = require("../controllers/taskController");

// create task
router.post("/", createTask);
// get all tasks
router.get("/", getAllTasks);
// get a single task
router.get("/:id", getTask);
// update task
router.patch("/:id", updateTask);
// delete task
router.delete("/:id", deleteTask);

module.exports = router;
