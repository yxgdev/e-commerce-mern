import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// actions
export const getCart = async (dispatch, id) => {
  dispatch(cartLoading());
  try {
    const res = await axios.get(`/api/cart/${id}`);
    const cart = res.data;
    dispatch(cartLoaded(cart));
  } catch (error) {
    console.log("get cart action error");
  }
};

export const addToCart = async (dispatch, id, productId, quantity) => {
  const res = await axios.post(`/api/${id}`);

  try {
    const newCart = res.data;

    dispatch(addedToCart(newCart));
  } catch (error) {
    console.log("add to cart action error");
  }
};

export const deleteFromCart = async (dispatch, userId, itemId) => {
  try {
    await axios.delete(`/api/cart/${userId}/${itemId}`);
    dispatch(deletedItemCart());
  } catch (error) {}
};
// slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isLoading: true,
    items: [],
    billAmount: 0,
  },
  reducers: {
    cartLoading: (state, action) => {
      state.isLoading = true; // is still loading
    },
    cartLoaded: (state, action) => {
      state.isLoading = false; //cart has loaded
      state.items = action.payload; // set items = that items returned by api
    },
    addItem: (state, action) => {
      state.quantity += 1;
      state.items.push(action.payload);
      state.billAmount += 500;
    },
  },
});

export const { cartLoading, cartLoaded, addItem } = cartSlice.actions;
export default cartSlice.reducers;