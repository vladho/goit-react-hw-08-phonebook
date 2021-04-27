import { combineReducers, createReducer } from "@reduxjs/toolkit"
import {
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registerError,
  registerSuccess,
} from "./authAction"

const intialUserState = { name: null, email: null }

const user = createReducer(intialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => intialUserState,
})

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
})

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload.message,
  [loginError]: (_, { payload }) => payload.message,
  [logoutError]: (_, { payload }) => payload.message,
})

export const authReducer = combineReducers({
  user,
  token,
  error,
})
