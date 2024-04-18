import { useSelector } from "react-redux";

export const useCartTotal = () => {
  const cart = useSelector((state) => state.cart);

  const total = cart?.items?.reduce((sum, curr) => {
    const currentPrice = curr.discount
      ? Math.round(curr.price - curr.price * curr.discount)
      : curr.price;

    return sum + currentPrice * curr.quantity;
  }, 0);
  return { total };
};
