import React from 'react';

const Task = ({task: {label, completed}}) => (
    <li className={completed ? 'completed' : null}>{label}</li>
);

export default Task;