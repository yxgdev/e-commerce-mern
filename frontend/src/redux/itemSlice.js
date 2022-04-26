import { createSlice } from "@reduxjs/toolkit";
import {
  items,
  cameraItems,
  gameItems,
  productivityItems,
} from "../components/ItemsList/itemsInItemsList";
const itemSlice = createSlice({
  name: "item",
  initialState: {
    category: "all",
    items: items,
  },
  reducers: {
    changeCategory: (state, action) => {
      switch (action.payload) {
        case 0:
          state.items = items;
          state.category = "all";
          break;
        case 1:
          state.items = gameItems;
          state.category = "gaming";
          break;
        case 2:
          state.items = productivityItems;
          state.category = "productivity";
          break;
        case 3:
          state.items = cameraItems;
          state.category = "photography";
          break;
        default:
          state.items = items;
          state.category = "all";
      }
    },
  },
});

export const { changeCategory } = itemSlice.actions;

export default itemSlice.reducer;
