import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "temp",
};

export const tempSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    temp: (state, action) => {
      return {
        value: state.value + action.payload,
      };
    },
  },
});

export const { temp } = tempSlice.actions;
export default tempSlice.reducer;
