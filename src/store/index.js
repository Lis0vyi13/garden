import { configureStore } from "@reduxjs/toolkit";
import { reducer as cartReducer } from "./cart/cartAmount.slice";

export const store = configureStore({
  reducer: {
    cartAmount: cartReducer,
  },
});
