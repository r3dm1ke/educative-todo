import React, {useState} from 'react';

const TaskInput = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value);
    };

    const handleChange = (event) => setValue(event.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type={'text'}
                placeholder={'Enter new task'}
                value={value}
                onChange={handleChange}
            />
        </form>
    );
};

export default TaskInput;