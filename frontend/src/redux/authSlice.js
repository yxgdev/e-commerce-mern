import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// actions
export const loadUser = async (dispatch, getState) => {
  dispatch(userLoading());

  try {
    const res = await axios.get("/api/user", tokenConfig(getState));

    dispatch(userLoaded(res.data));
  } catch (error) {
    console.log("loadUser error");
  }
};
// slice

// works
export const register = async (dispatch, user) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(user);

  try {
    const res = await axios.post("/auth/register", user, config);
    console.log(res.data);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    console.log("register error");
  }
};

export const login = async (dispatch, user) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(user);

  try {
    console.log(user);
    const res = await axios.post("/auth/login", user, config);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    console.log("login error");
  }
};

export const tokenConfig = (getState) => {
  //Get token from local storage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    isLoading: false,
    user: null,
  },
  reducers: {
    userLoading: (state, action) => {
      state.isLoading = true;
    },
    userLoaded: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.isAuthenticated = true;
      state.isLoading = false;
      console.log(action.payload);
      state.user = action.payload.user;
    },
    registerSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload.user;
    },
    logout: (state, action) => {
      localStorage.removeItem("token");
    },
    authError: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isAuthenticated = null;
      state.isLoading = false;
    },
  },
});

export const {
  userLoading,
  userLoaded,
  addItem,
  loginSuccess,
  logout,
  registerSuccess,
  authError,
} = authSlice.actions;
export default authSlice.reducer;
