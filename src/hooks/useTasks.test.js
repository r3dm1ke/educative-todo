import { renderHook, act } from '@testing-library/react-hooks';
import useTasks from './useTasks';
import * as Api from '../api';

jest.mock('../api', () => ({getTasks: jest.fn()}));

describe('#useTasks', () => {
    it('must request tasks', async () => {
        Api.getTasks.mockResolvedValueOnce([
            {label: 'do this', id: 0, completed: false},
            {label: 'do that', id: 1, completed: true}
        ]);
        const { result, waitForNextUpdate } = renderHook(() => useTasks());
        expect(result.current[0]).toBe(null);

        await waitForNextUpdate();

        expect(result.current[0].length).toBe(2);
        expect(result.current[0][0].label).toBe('Do this');
        expect(Api.getTasks).toHaveBeenCalled();
    });
});