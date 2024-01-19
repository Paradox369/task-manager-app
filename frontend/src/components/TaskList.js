import React from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

const TaskList = () => {
    return (
        <div>
            <h2>task manager</h2>
            <TaskForm />
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
