const ROOT = 'http://localhost:3001/tasks';

// write createTask here

export const updateTask = async (updatedTask) => {
    const result = await fetch(`${ROOT}/${updatedTask.id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedTask),
    });
    return result.json();
};

export const getTasks = async () => {
    const result = await fetch(ROOT);
    return result.json();
};
