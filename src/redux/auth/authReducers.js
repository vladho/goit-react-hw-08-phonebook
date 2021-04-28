import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  registerError,
  registerSuccess,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./authAction";

const intialUserState = { name: null, email: null };

const user = createReducer(intialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => intialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload.message,
  [loginError]: (_, { payload }) => payload.message,
  [logoutError]: (_, { payload }) => payload.message,
  [getCurrentUserError]: (_, { payload }) => payload.message,
});

export const IsAuthenticated = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [logoutSuccess]: () => false,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
});

export const authReducer = combineReducers({
  user,
  IsAuthenticated,
  token,
  error,
});
