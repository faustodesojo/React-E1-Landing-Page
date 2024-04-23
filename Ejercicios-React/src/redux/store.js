import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { recommendedSlice } from "./recommendedRooms/recommendedSlice";
import roomsSlice from "./rooms/roomsSlice";
import cartSlice from "./cart/cartSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  recommended: recommendedSlice,
  rooms: roomsSlice,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
