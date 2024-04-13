import { useSelector } from "react-redux";

export const useCartAmount = () => {
  const cartAmount = useSelector((state) => state.cartAmount);
  return { cartAmount };
};
