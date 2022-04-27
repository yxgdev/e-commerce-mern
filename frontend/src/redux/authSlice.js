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
//works
export const login = async (dispatch, user) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(user);

  try {
    const res = await axios.post("/auth/login", user, config);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    console.log("login error");
  }
};

// add item to cart
export const addToCart = async (dispatch, productId, user) => {
  const res = await axios.post(`/cart/${productId}`, user);

  try {
    const newCart = res.data;

    dispatch(addedToCart(newCart));
  } catch (error) {
    console.log("add to cart action error");
  }
};
// delete item from cart
export const deleteItemFromCart = async (dispatch, userId, itemId) => {
  try {
    const res = await axios.delete(`/cart/${userId}/${itemId}`);
    dispatch(deletedItemCart(res.data));
  } catch (error) {}
};

export const updateItemInCart = async (dispatch, userId, itemId, quantity) => {
  try {
    const res = await axios.patch(`/cart/${userId}/${itemId}`, { quantity });
    dispatch(updatedItemCart(res.data));
  } catch (error) {}
};

// checkout stripe
export const checkOutStripe = async (dispatch, user) => {
  try {
    const res = await axios.post("/cart/checkout", user);
    dispatch(checkOut(res.data));
  } catch (error) {
    console.log("check out strip eeror");
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

const authAndCart = createSlice({
  name: "authAndCart",
  initialState: {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    isLoading: false,
    user: null,
    billAmount: 0,
    checkOutUrl: null,
    checkOutSuccess: null,
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
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    registerSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      localStorage.removeItem("token");
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
    },
    authError: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
      state.isAuthenticated = null;
      state.isLoading = false;
    },
    // cart related starts here -------
    addedToCart: (state, action) => {
      const user = action.payload;
      state.user = user.user;
    },
    deletedItemCart: (state, action) => {
      const user = action.payload;
      state.user = user.user;
    },
    updatedItemCart: (state, action) => {
      const user = action.payload;
      state.user = user.user;
    },
    checkOut: (state, action) => {
      state.checkOutUrl = action.payload.url;
    },
  },
});

export const {
  userLoading,
  userLoaded,
  loginSuccess,
  logout,
  addedToCart,
  deletedItemCart,
  updatedItemCart,
  registerSuccess,
  checkOut,
  authError,
} = authAndCart.actions;
export default authAndCart.reducer;
