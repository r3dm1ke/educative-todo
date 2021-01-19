import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';

import TaskList from './TaskList';

describe('<TaskList />', () => {
    it('must render tasks', () => {
        const tasks = [
            {label: 'Do this', completed: false},
            {label: 'Do that', completed: false},
            {label: 'Do nothing', completed: true}
        ];
        render(<TaskList tasks={tasks} />);
        const renderedTasks = tasks.map(task => screen.getByText(task.label));
        expect(renderedTasks.length).toBe(3);
    });

    it('must fire on toggle callback', () => {
        const tasks = [
            {label: 'Do this', completed: false},
            {label: 'Do that', completed: true}
        ];
        const mockOnToggle = jest.fn();
        render(<TaskList tasks={tasks} onToggleTask={mockOnToggle} />);
        const renderedTasks = tasks.map(task => screen.getByText(task.label));
        fireEvent.click(renderedTasks[1]);
        expect(mockOnToggle).toHaveBeenCalledWith(1);
    })
});