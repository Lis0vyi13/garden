import { useMemo, useState } from "react";

import ProductsList from "./ProductsTemplates/ProductsList";
import AllProductsSort from "./ProductsSort";

import { getHighestPrice } from "../../utils/getHighestPrice";

import Loader from "../Loader/Loader";

import Title from "../../ui/Title";
import Button from "../../ui/Button";

import { products } from "../../constants";

const AllProducts = () => {
  const [title, setTitle] = useState("All products");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFiltersOpen, setisFiltersOpen] = useState(false);
  const [sortOptions, setSortOptions] = useState({
    from: 0,
    to: getHighestPrice(),
    discount: false,
    sortBy: "default",
    category: "All products",
  });

  const filteredList = useMemo(() => {
    setIsUpdating(true);
    setTimeout(() => {}, 300);
    let sortedProducts = [...products];
    const { from, to, discount, sortBy, category } = sortOptions;

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

    let titleText = "All products";

    switch (category) {
      case "Fertilizer":
        titleText = discount ? "Discounted items" : "Fertilizer";
        sortedProducts = sortedProducts.filter(
          (item) => item.type === "fertilizer",
        );
        break;
      case "Tools and equipment":
        titleText = discount ? "Discounted items" : "Tools and equipment";
        sortedProducts = sortedProducts.filter(
          (item) => item.type === "tools-and-equipment",
        );
        break;
      case "Protective products and septic tanks":
        titleText = discount
          ? "Discounted items"
          : "Protective products and septic tanks";
        sortedProducts = sortedProducts.filter(
          (item) => item.type === "protective-products-and-septic-tanks",
        );
        break;
      case "Planting material":
        titleText = discount ? "Discounted items" : "Planting material";
        sortedProducts = sortedProducts.filter(
          (item) => item.type === "planting-material",
        );
        break;
      case "Pots and planters":
        titleText = discount ? "Discounted items" : "Pots and planters";
        sortedProducts = sortedProducts.filter(
          (item) => item.type === "pots-and-planters",
        );
        break;
      case "Decor":
        titleText = discount ? "Discounted items" : "Decor";
        sortedProducts = sortedProducts.filter((item) => item.type === "decor");
        break;
      default:
        break;
    }

    setTitle(titleText);
    setTimeout(() => {
      setIsUpdating(false);
    }, 150);
    return sortedProducts;
  }, [sortOptions]);

  return (
    <div className="relative all-products">
      <div className="relative flex items-center justify-between overflow-hidden">
        <Title text={title} />
        <Button
          onClick={() => setisFiltersOpen(true)}
          text="Filters"
          extraClassName="px-6 py-[10px] md:hidden"
          isGreen
        />
        <div
          className={`${
            isFiltersOpen ? "translate-x-[-1%]" : "translate-x-[120%]"
          } flex flex-col duration-300 right-0 top-[110px] rounded-xl p-4 fixed border-2 border-green bg-white z-40 md:hidden`}
        >
          <AllProductsSort
            setIsUpdating={setIsUpdating}
            setOptions={setSortOptions}
          />
          <Button
            onClick={() => setisFiltersOpen(false)}
            text="Close"
            extraClassName="text-white py-[12px] bg-red hover:bg-hoverRed mt-4"
          />
        </div>
      </div>
      <div className="mt-10 mb-2">
        <AllProductsSort
          className="hidden md:inline-grid"
          setIsUpdating={setIsUpdating}
          setOptions={setSortOptions}
        />
      </div>
      {isUpdating ? <Loader /> : <ProductsList list={filteredList} />}
    </div>
  );
};

export default AllProducts;
