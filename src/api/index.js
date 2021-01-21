const ROOT = 'http://localhost:3001/tasks';

export const createTask = async (taskName) => {
    const newTask = {
        label: taskName,
        completed: false
    };
    const result = await fetch(ROOT, {
        method: 'POST',
        body: JSON.stringify(newTask),
    });
    return result.json();
};

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
