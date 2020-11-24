import React from 'react'

import TaskInput from './TaskInput';
import {fireEvent, render, screen, wait} from '@testing-library/react'


describe('<TaskInput />', () => {
    it('renders an input', () => {
        render(<TaskInput />);
        expect(screen.queryByPlaceholderText('Enter new task')).toBeInTheDocument();
    });

    it('fires onSubmit callback', async () => {
        const mockOnSubmit = jest.fn();
        render(<TaskInput onSubmit={mockOnSubmit} />);
        const inputNode = screen.getByPlaceholderText('Enter new task');
        fireEvent.change(inputNode, {target: {value: 'new task!'}});
        fireEvent.submit(inputNode);
        await wait(() => expect(mockOnSubmit).toHaveBeenCalledWith('new task!'));
    })
});