import { createSlice } from "@reduxjs/toolkit";
import { items } from "../components/ItemsList/itemsInItemsList";
const itemSlice = createSlice({
  name: "item",
  initialState: {
    category: "all",
    items: items,
  },
  reducers: {
    categoryChanged: (state, action) => {
      state.category = action.payload.category;
      state.items = action.payload.items;
    },
  },
});

export const { categoryChanged } = itemSlice.actions;

export default itemSlice.reducer;
