import { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ProductsList from "../ProductsList";
import AllProductsSort from "./AllProductsSort";

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

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSortOptions({
      from: params.get("from") || 0,
      to: params.get("to") || getHighestPrice(),
      discount: params.get("discount") === "true",
      sortBy: params.get("sortBy"),
    });
  }, [location.search]);

  const filteredList = useMemo(() => {
    let sortedProducts = [...products];
    const { from, to, discount, sortBy } = sortOptions;
    console.log(sortBy);
    sortedProducts = sortedProducts.filter((item) => {
      const price = item.discount
        ? Math.round(item.price * item.discount)
        : item.price;
      return price >= +from && price <= +to && (!discount || item.discount);
    });

    switch (sortBy) {
      case "low-high":
        sortedProducts.sort(
          (a, b) => a.price * (a.discount || 1) - b.price * (b.discount || 1),
        );
        break;
      case "high-low":
        sortedProducts.sort(
          (a, b) => b.price * (b.discount || 1) - a.price * (a.discount || 1),
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
