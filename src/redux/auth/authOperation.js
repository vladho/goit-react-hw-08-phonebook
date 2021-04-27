import axios from "axios"
import {
  loginError,
  loginRequest,
  loginSuccess,
  logoutError,
  logoutRequest,
  logoutSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./authAction"

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ""
  },
}

export const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest())
  try {
    const response = await axios.post("/users/signup", credentials)
    token.set(response.data.token)
    dispatch(registerSuccess(response.data))
  } catch (error) {
    dispatch(registerError(error.message))
  }
}

export const login = (credentials) => async (dispatch) => {
  dispatch(loginRequest())
  try {
    const response = await axios.post("/users/login", credentials)
    token.set(response.data.token)
    dispatch(loginSuccess(response.data))
  } catch (error) {
    dispatch(loginError(error.message))
  }
}

export const logOut = () => async (dispatch) => {
  dispatch(logoutRequest())
  try {
    const response = await axios.post("/users/logout")
    token.unset()
    dispatch(logoutSuccess(response.data))
  } catch (error) {
    dispatch(logoutError(error.message))
  }
}
