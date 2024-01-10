import { store } from "../redux/store";
import axios from "axios";
export const baseURL = "http://localhost:4000";
export const APIuser = axios.create({
  baseURL: `${baseURL}/users`,
});
const addTokenToHeaders = () => {
  const { token } = store.getState().user;
  if (token) {
    // API.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};
addTokenToHeaders(); // Call the function once when the app loads to set the initial token
store.subscribe(addTokenToHeaders);

export const APIS = {
  login: "/login",
  signup: "/register",
  forgot: "/forgot",
  reset: "/change-password",
};
