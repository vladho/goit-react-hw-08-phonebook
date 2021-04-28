import { contactsReducer } from "./contacts/contactsRecuders";
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducers";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);
export default { store, persistor };
