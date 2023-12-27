import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import recommendeReducer from "./recommended/recommendedSlice";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import cartSlice from "./cart/cartSlice";

const persistConfig = {
  key: "root",
  Storage,
};

const reducers = combineReducers({
  recommended: recommendeReducer,
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartSlice,
});

const persisterReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {
    persisterReducer,
  },
});

export default store;

export const persistor = persistStore(store);
