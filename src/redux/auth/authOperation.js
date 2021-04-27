import axios from "axios";
import { registerError, registerSuccess } from "./authAction";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {};

const register = (credentials) => (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post("/users/signup", credentials)
        dispatch(registerSuccess(response.data))
    } catch (error) {
        dispatch(registerError(error))
    }
};

const login = (credentials) => (dispatch) => {};

const logOut = () => (dispatch) => {};
