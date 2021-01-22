import {useEffect, useState} from 'react';
import {createTask as _createTask, getTasks, updateTask} from '../api';

const useTasks = () => {
    const [tasks, setTasks] = useState(null);

    const refreshTasks = async () => {
        setTasks(await getTasks());
    };

    const toggleTask = async (index) => {
        const newTask = {...tasks[index], completed: !tasks[index].completed};
        await updateTask(newTask);
        setTasks(await getTasks());
    };

    const createTask = async (taskName) => {
        const newTask = await _createTask(taskName);
        setTasks(tasks ? [...tasks, newTask] : [newTask]);
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return [tasks, {toggleTask, createTask}]
};

export default useTasks;