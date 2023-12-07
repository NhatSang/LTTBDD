import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTaskAPI, removeTaskAPI} from "./api";
const reducers = createSlice({
  name: "todo",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {
    getTasksStart: (state) => {
      state.status = "loading";
    },
    getTasksSuccess: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    getTasksFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    addTasksStart: (state) => {
      state.status = "loading";
    },
    addTasksSuccess: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    addTasksFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    removeTasksStart: (state) => {
      state.status = "loading";
    },
    removeTasksSuccess: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    removeTasksFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});
export const {
  getTasksStart,
  getTasksSuccess,
  getTasksFailure,
  addTasksStart,
  addTasksSuccess,
  addTasksFailure,
  removeTasksStart,
  removeTasksSuccess,
  removeTasksFailure,
} = reducers.actions;
export const selectTodo = (state) => state.todo.data;
export const fetchTasksAsync = () => async (dispatch) => {
  dispatch(getTasksStart());
  try {
    const tasks = await fetchTasks();
    dispatch(getTasksSuccess(tasks));
  } catch (error) {
    dispatch(getTasksFailure(error.toString()));
  }
};
export const addTaskAsync = (newjob) => async (dispatch) => {
  dispatch(addTasksStart());
  try {
    const addjob= await addTaskAPI(newjob);
    dispatch(addTasksSuccess(addjob));
    dispatch(fetchTasksAsync());
  } catch (error) {
    dispatch(addTasksFailure(error.toString()));
  }
};
export const removeTaskAsync = (jobId) => async (dispatch) => {
  dispatch(removeTasksStart());
  try {
    const removeTasks = await removeTaskAPI(jobId);
    dispatch(removeTasksSuccess(removeTasks));
    dispatch(fetchTasksAsync());
  } catch (error) {
    dispatch(removeTasksFailure(error.toString()));
  }
};
export default reducers.reducer;
