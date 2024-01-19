import { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "../App";

const TaskList = () => {
    const [formData, setFormData] = useState({
        name: "",
        completed: false,
    });

    const { name } = formData;
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const createTask = async (e) => {
        e.preventDefault();
        if (name === "") {
            return toast.error("enter a task there!");
        }
        try {
            await axios.post(`${URL}/api/tasks`, formData);
            toast.success("task added successfully");
            setFormData({ ...formData, name: "" });
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <h2>task manager</h2>
            <TaskForm
                name={name}
                handleInputChange={handleInputChange}
                createTask={createTask}
            />
            <div className="--flex-between --pb">
                <p>
                    <b>total tasks: </b>0
                </p>
                <p>
                    <b>completed tasks: </b>0
                </p>
            </div>
            <hr />
            <Task />
        </div>
    );
};

export default TaskList;
