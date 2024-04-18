import { useSelector } from "react-redux";
import { useActions } from "./useActions";

export const useCartActions = (id = null) => {
  let isAdded = null;

  const store = useSelector((state) => state.cart);
  const { toggleCart, removeCartItem, changeItemQuantity } = useActions();

  if (id) isAdded = store?.items?.some((item) => item.id === +id);

  return { isAdded, toggleCart, removeCartItem, changeItemQuantity };
};
