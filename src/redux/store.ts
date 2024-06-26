import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authReducer from "./Auth/authReducer";

const persistConfig = {
  key: "root",
  storage
  // whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer
  }
});

const persistor = persistStore(store);

export { store, persistor };
