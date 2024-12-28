import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    color: "",
    weight: "",
    gold: "18kt",
    price: "",
  },
};

export const filterSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addFilterOptions: (state, action) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value,
        },
      };
    },
  },
});

export const { addFilterOptions } = filterSlice.actions;
export default filterSlice.reducer;
