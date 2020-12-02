import React from 'react';

const TaskList = ({tasks}) => {
    return (
        <ul>
            {tasks.map(task => <li key={task}>{task}</li>)}
        </ul>
    );
};

export default TaskList;