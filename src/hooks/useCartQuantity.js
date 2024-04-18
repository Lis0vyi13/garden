import { useSelector } from "react-redux";

export const useCartQuantity = () => {
  const cart = useSelector((state) => state.cart);
  const quantity = cart?.items?.reduce(
    (total, curr) => total + curr.quantity,
    0,
  );
  return { quantity };
};
