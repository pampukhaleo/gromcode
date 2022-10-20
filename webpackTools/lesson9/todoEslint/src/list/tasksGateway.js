const baseUrl = 'https://63453f7539ca915a69f9a53e.mockapi.io/api/v1/tasks';

export const getTasksList = () => fetch(baseUrl)
  .then((response) => response.json());

export const createTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updateTask = (taskId, taskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
