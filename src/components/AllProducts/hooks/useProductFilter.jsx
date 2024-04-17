import { useMemo } from "react";
import { products } from "../../../constants";

export const useProductFilter = (sortOptions, setTitle) => {
  return useMemo(() => {
    const { from, to, discount, sortBy, category } = sortOptions;

    let sortedProducts = [...products];
    sortedProducts = sortedProducts.filter((item) => {
      const price = item.discount
        ? Math.round(item.price - item.price * item.discount)
        : item.price;
      return price >= +from && price <= +to && (!discount || item.discount);
    });

    switch (sortBy) {
      case "low-high":
        sortedProducts.sort(
          (a, b) =>
            a.price -
            (a.discount ? a.price * a.discount : 0) -
            (b.price - (b.discount ? b.price * b.discount : 0)),
        );
        break;
      case "high-low":
        sortedProducts.sort(
          (a, b) =>
            b.price -
            (b.discount ? b.price * b.discount : 0) -
            (a.price - (a.discount ? a.price * a.discount : 0)),
        );
        break;
      default:
        break;
    }

    let currentCategory = "";
    switch (category) {
      case "Fertilizer":
        currentCategory = category;
        sortedProducts = sortedProducts.filter(
          (item) => item.type === "fertilizer",
        );
        break;
      case "Tools and equipment":
        currentCategory = category;
        sortedProducts = sortedProducts.filter(
          (item) => item.type === "tools-and-equipment",
        );
        break;
      case "Protective products and septic tanks":
        currentCategory = category;
        sortedProducts = sortedProducts.filter(
          (item) => item.type === "protective-products-and-septic-tanks",
        );
        break;
      case "Planting material":
        currentCategory = category;
        sortedProducts = sortedProducts.filter(
          (item) => item.type === "planting-material",
        );
        break;
      case "Pots and planters":
        currentCategory = category;
        sortedProducts = sortedProducts.filter(
          (item) => item.type === "pots-and-planters",
        );
        break;
      case "Decor":
        currentCategory = category;
        sortedProducts = sortedProducts.filter((item) => item.type === "decor");
        break;
      default:
        currentCategory = "All products";
        break;
    }
    let newTitle = discount ? "Discounted items" : currentCategory;
    setTitle(newTitle);

    return { sortedProducts };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortOptions]);
};
