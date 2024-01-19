import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "../App";
import loadingImg from "../assets/loader.gif";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        completed: false,
    });

    const { name } = formData;
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const getTasks = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`${URL}/api/tasks`);
            setTasks(data);
            setIsLoading(false);
        } catch (error) {
            toast.error(error.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

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
            {isLoading && (
                <div className="--flex-center">
                    <img src={loadingImg} alt="loading..." />
                </div>
            )}
            {!isLoading && tasks.length === 0 ? (
                <p className="--py">no tasks currently</p>
            ) : (
                <>
                    {tasks.map((task) => {
                        return <Task />;
                    })}
                </>
            )}
        </div>
    );
};

export default TaskList;
