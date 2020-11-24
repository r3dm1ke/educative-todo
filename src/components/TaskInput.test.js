import React from 'react'

import TaskInput from './TaskInput';
import {render, screen} from '@testing-library/react'


describe('<TaskInput />', () => {
    it('renders an input', () => {
        render(<TaskInput />);
        expect(screen.queryByPlaceholderText('Enter new task')).toBeInTheDocument();
    });
});