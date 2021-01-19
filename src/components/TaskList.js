import React from 'react';
import Task from './Task';

const TaskList = ({tasks, onToggleTask}) => {
    return (
        <ul>
            {tasks.map((task, idx) =>
                <Task key={task.label} task={task} onToggle={() => onToggleTask(idx)} />
            )}
        </ul>
    );
};

export default TaskList;