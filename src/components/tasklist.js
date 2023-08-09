import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, deleteTask } from '../actions/tasks';
import './task.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const TaskList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleEditTask = () => {
        window.scrollTo(0, 0);
    };

    const data = useSelector((state) => state.tasks);
    const { tasks } = data;

    if (tasks.length === 0) {
        return <div className="loading">Loading...</div>;
    }

    const sortedTasks = tasks.slice().sort((a, b) => b.id - a.id);

    return (
        <div className="task-list-container">
            {sortedTasks.map((task, index) => (
                <div className="task-card" key={index}>
                    <h2 className="task-title">{task.name}</h2>
                    <p className="task-description">{task.description}</p>
                    <p className="task-date">Due Date: {task.dueDate}</p>

                    <button
                        className="delete-button"
                        onClick={() => handleDeleteTask(task.id)}
                    >
                        Delete
                    </button>
                    <Link
                        to={`/${task.id}`}
                        className="edit-button"
                        onClick={handleEditTask}
                    >
                        Edit
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
