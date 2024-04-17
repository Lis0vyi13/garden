import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartAmount",
  initialState: {
    value: 0,
    arr: [],
  },
  reducers: {
    toggleCart: (state, { payload }) => {
      const isExists = state.arr.some((item) => item.id === payload.id);
      const value = isExists ? -1 : 1;
      isExists
        ? (state.arr = state.arr.filter((item) => item.id != payload.id))
        : state.arr.push(payload);
      state.value += value;
    },
  },
});

export const { incremented, decremented } = cartSlice.actions;
export const { reducer, actions } = cartSlice;
