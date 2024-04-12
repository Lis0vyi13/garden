import { useMemo, useState } from "react";

import ProductsList from "./ProductsTemplates/ProductsList";
import AllProductsSort from "./ProductsSort";

import { getHighestPrice } from "../../utils/getHighestPrice";

import Loader from "../Loader/Loader";
import Title from "../../ui/Title";

import { products } from "../../constants";

const AllProducts = () => {
  const [title, setTitle] = useState("All products");
  const [isUpdating, setIsUpdating] = useState(false);
  const [sortOptions, setSortOptions] = useState({
    from: 0,
    to: getHighestPrice(),
    discount: false,
    sortBy: "default",
  });

  const filteredList = useMemo(() => {
    let sortedProducts = [...products];
    const { from, to, discount, sortBy } = sortOptions;
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
      case "tools-and-equipment":
        setTitle("Tools and Equipment");
        return sortedProducts.filter(
          (item) => item.type === "tools-and-equipment",
        );
      default:
        break;
    }
    discount ? setTitle("Discounted items") : setTitle("All products");
    return sortedProducts;
  }, [sortOptions]);

  return (
    <div className="all-products">
      <div className="container">
        <Title text={title} />
        <div className="mt-10 mb-2">
          <AllProductsSort
            setIsUpdating={setIsUpdating}
            setOptions={setSortOptions}
          />
        </div>
        {isUpdating ? <Loader /> : <ProductsList list={filteredList} />}
      </div>
    </div>
  );
};

export default AllProducts;
