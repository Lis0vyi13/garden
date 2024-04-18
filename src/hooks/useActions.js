import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { actions as cartActions } from "../store/cart/cart.slice";

const rootActions = { ...cartActions };
export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
