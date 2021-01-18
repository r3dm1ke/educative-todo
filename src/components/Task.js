import React from 'react';

const Task = (
    {
        task: {label, completed},
        onToggle
    }) => (
    <li className={completed ? 'completed' : null} onClick={onToggle}>{label}</li>
);

export default Task;