import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || {
    value: 0,
    items: [],
  },
  reducers: {
    toggleCart: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      const isExists = itemIndex !== -1;

      if (isExists) {
        state.items.splice(itemIndex, 1);
        state.value--;
      } else {
        state.items.push(action.payload);
        state.value++;
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeCartItem: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
        state.value--;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    changeItemQuantity: (state, action) => {
      const { id, value } = action.payload;
      const item = state.items.find((item) => item.id === id);

      item.quantity = value;

      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearState: (state) => {
      localStorage.clear();
      state.value = 0;
      state.items = [];
    },
  },
});

export const { reducer, actions } = cartSlice;
