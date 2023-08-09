import React from 'react';
import TaskList from '../components/tasklist';
import AddTaskForm from '../components//addtask';

const TaskPage = () => (
    <div className='tasks'>
        <h1>Task Management</h1>
        <AddTaskForm />

        <TaskList />
    </div>
);

export default TaskPage;
