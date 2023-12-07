const url = "https://6546fee0902874dff3abe603.mockapi.io/user";

export const fetchTasks = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const addTaskAPI = async (newJob) => {
  try {
    const todo = await fetchTasks();
    const response = await fetch(`${url}/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: [...todo[0].todo, { id: todo[0].todo.length + 1, job: newJob }],
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const removeTaskAPI = async (jobId) => {
  try {
    const todo = await fetchTasks();
    const response = await fetch(`${url}/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: todo[0].todo.filter(job => job.id !== jobId),
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};
