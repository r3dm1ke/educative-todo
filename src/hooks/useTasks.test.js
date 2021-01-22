import { renderHook, act } from '@testing-library/react-hooks';
import useTasks from './useTasks';
import {getTasks, createTask as apiCreateTask, updateTask} from '../api';

jest.mock('../api');

describe('#useTasks', () => {
    it('must request tasks', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useTasks());
        expect(result.current[0]).toBe(null);

        await waitForNextUpdate();

        expect(result.current[0].length).toBe(2);
        expect(result.current[0][0].label).toBe('Do this');
        expect(getTasks).toHaveBeenCalled();
    });
    it('must create tasks', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useTasks());
        await waitForNextUpdate();

        const [_, {createTask}] = result.current;
        await act(() => createTask('New task!'));

        const [tasks] = result.current;
        expect(tasks[tasks.length - 1]).toEqual({id: expect.anything(), label: 'New task!', completed: false});
        expect(apiCreateTask).toHaveBeenCalledWith('New task!');
    });
    it('must update tasks', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useTasks());
        await waitForNextUpdate();
        const [tasks, {toggleTask}] = result.current;

        await act(() => toggleTask(0));
        expect(updateTask).toHaveBeenCalledWith({...tasks[0], completed: !tasks[0].completed});
    });
});