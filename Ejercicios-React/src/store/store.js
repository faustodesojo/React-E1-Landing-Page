import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

const persistConfig = {
  key: "root",
  storage: localStorage,
}

const reducers = {
  counter: counterReducer
}

const store = configureStore({
  reducer: counterReducer,
});

export default store;
