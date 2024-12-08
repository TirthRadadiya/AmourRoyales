import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  product: {},
};

export const modalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setModalProduct: (state, action) => {
      return {
        ...state,
        product: action.payload,
      };
    },
  },
});

export const { toggleModal, setModalProduct } = modalSlice.actions;
export default modalSlice.reducer;
