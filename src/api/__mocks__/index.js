export const createTask = jest.fn(taskName =>
    Promise.resolve({
        id: 1,
        label: taskName,
        completed: false
    }));

export const updateTask = jest.fn(task => Promise.resolve(task));

export const getTasks = jest.fn(() =>
    Promise.resolve([
        {id: 1, label: 'Do this', completed: false},
        {id: 2, label: 'Do that', completed: true}
    ])
);
