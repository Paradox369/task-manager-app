const TaskModel = require("../model/taskModel");

const createTask = async (req, res) => {
    try {
        const task = await TaskModel.create(req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await TaskModel.findById(id);
        if (!task) {
            return res.status(404).json(`no such task: ${id} exists`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await TaskModel.findByIdAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await TaskModel.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json(`no such task: ${id} exists`);
        }
        res.status(200).send("task deleted");
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
};
