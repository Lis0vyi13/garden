import { useSelector } from "react-redux";

export const useCart = () => {
  const store = useSelector((state) => state.cart);

  return { store };
};
