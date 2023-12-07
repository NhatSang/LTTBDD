import { configureStore } from "@reduxjs/toolkit";
import reducers, { fetchTasksAsync } from "./reducers";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    todo: reducers,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
store.dispatch(fetchTasksAsync());
export default store;
