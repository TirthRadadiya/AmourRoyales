import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  products: [],
};

export const cartSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeToCart: (state, action) => {},
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;
