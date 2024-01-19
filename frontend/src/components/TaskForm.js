import React from "react";

const TaskForm = ({
    createTask,
    name,
    handleInputChange,
    isEditing,
    updateTask,
}) => {
    return (
        <form
            onSubmit={isEditing ? updateTask : createTask}
            className="task-form">
            <input
                type="text"
                placeholder="add task"
                name="name"
                value={name}
                onChange={handleInputChange}
            />
            <button type="submit">{isEditing ? "edit" : "add"}</button>
        </form>
    );
};

export default TaskForm;
