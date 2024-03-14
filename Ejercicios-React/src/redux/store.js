import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import recommendedSlice from "./recommendedRooms/recommendedSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  recommended: recommendedReducer,
  rooms: roomsReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
});

export const persistor = persistStore(store);
