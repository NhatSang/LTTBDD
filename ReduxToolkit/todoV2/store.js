import { configureStore } from "@reduxjs/toolkit";
import todoSlide, {fetchTasksAsync} from "./todoSlide"

const store = configureStore({
  reducer: {
    todo: todoSlide,
  },
  
});
// store.dispatch(fetchTasksAsync());
export default store;
