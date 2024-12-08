import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  products: [],
};

export const likeSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToLiked: (state, action) => {},
    removeFromLiked: (state, action) => {},
  },
});

export const { addToLiked, removeFromLiked } = likeSlice.actions;
export default likeSlice.reducer;
