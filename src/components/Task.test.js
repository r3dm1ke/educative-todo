import React from 'react'

import Task from './Task';
import {render, screen} from '@testing-library/react'


describe('<Task />', () => {
    const completedTask = {
        label: 'Do this',
        completed: true
    };
    const uncompletedTask = {
        label: 'Do that',
        completed: false
    };

    it('renders the task', () => {
        render(<Task task={completedTask}/>);
        expect(screen.getByText(completedTask.label)).toBeInTheDocument();
    });

    it('assigns completed class', () => {
        render(<Task task={completedTask} />);
        expect(screen.getByText(completedTask.label)).toHaveClass('completed');

        render(<Task task={uncompletedTask} />);
        expect(screen.getByText(uncompletedTask.label)).not.toHaveClass('completed');
    });
});