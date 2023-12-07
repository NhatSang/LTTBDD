import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./api";

const todoSlide = createSlice({
  name: "todo",
  initialState: {
    data: await fetchTasks(),
    status: "idle",
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.data.map((item) => {
        if (action.payload.id == item.id) {
          item.todo = [
            ...item.todo,
            { id: item.todo.length + 1, job: action.payload.job },
          ];
        }
      });
    },
    removeTask: (state, action) => {
      state.data.map((item) => {
        if (action.payload.id == item.id) {
          item.todo = item.todo.filter(
            (task) => task.id !== action.payload.taskId
          );
        }
      });
    },
    updateTask: (state,action) =>{
        state.data.map((item) => {
          if (action.payload.id == item.id) {
            item.todo.map((task)=>{
                if(task.id == action.payload.taskId)
                {
                    task.job = action.payload.job
                }
            })
          }
        });
    }
  },
});
export const { addTask,removeTask, updateTask } = todoSlide.actions;
export const selectTodo = (state) => state.todo.data;

export default todoSlide.reducer;
