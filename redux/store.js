import { configureStore } from "@reduxjs/toolkit";
import tempReducer from "./features/auth-slice";
import cartReducer from "./utility/cart-slice";
import LikeReducer from "./utility/like-slice";
import ModalReducer from "./utility/modal-slice";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    temp: tempReducer,
    cart: cartReducer,
    liked: LikeReducer,
    modal: ModalReducer,
  },
});

export const useAppSelector = useSelector;