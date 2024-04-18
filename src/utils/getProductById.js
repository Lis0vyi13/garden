import { products } from "../constants";

export const getProductById = (id) => {
  return products.find((prod) => prod.id === +id);
};
