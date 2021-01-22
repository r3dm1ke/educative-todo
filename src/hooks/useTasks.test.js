import { renderHook, act } from '@testing-library/react-hooks';
import useTasks from './useTasks';
import {getTasks} from '../api';

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
});