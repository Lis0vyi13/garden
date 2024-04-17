import { useSelector } from "react-redux";

export const useCartAmount = () => {
  const cartAmount = useSelector((state) => state.cartAmount);
  const amount = cartAmount.arr.reduce((total, curr) => total + curr.amount, 0);
  return { amount };
};
