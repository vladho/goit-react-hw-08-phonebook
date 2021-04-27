import { contactsReducer } from "./contacts/contactsRecuders"
import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./auth/authReducers"

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
})

export default store
