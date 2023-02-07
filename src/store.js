import { configureStore } from "@reduxjs/toolkit";

import rootReducers from "./reducers/rootReducers";

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    fetchData: rootReducers,
  },
});

export default store;
