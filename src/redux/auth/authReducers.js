import { combineReducers, createReducer } from "@reduxjs/toolkit";

const intialUserState = { name: null, email: null };

const user = createReducer(intialUserState, {});

const token = createReducer(null, {});

const error = createReducer(null, {});

export default combineReducers({
  user,
  token,
  error,
});
