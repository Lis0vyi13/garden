import { products } from "../constants";

export const getHighestPrice = () => {
  let max = 0;
  for (let i = 0; i < products.length; i++) {
    const price = products[i].discount
      ? Math.round(products[i].price * products[i].discount)
      : products[i].price;
    if (max < price) max = price;
  }
  return max;
};
