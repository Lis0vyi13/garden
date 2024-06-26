import { configureStore } from "@reduxjs/toolkit";
import { reducer as cartReducer } from "./cart/cart.slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
