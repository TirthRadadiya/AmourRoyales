import { configureStore } from "@reduxjs/toolkit";
import tempReducer from "./features/auth-slice";
import filterReducer from "./features/filter-slice";
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
    filter: filterReducer
  },
});

export const useAppSelector = useSelector;
