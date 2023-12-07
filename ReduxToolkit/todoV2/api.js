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
