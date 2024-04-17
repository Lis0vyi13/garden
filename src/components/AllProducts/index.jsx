import { useState, useRef } from "react";
import ProductsList from "./ProductsTemplates/ProductsList";

import AllProductsSort from "./ProductsSort";

import Loader from "../Loader/Loader";
import Title from "../../ui/Title";
import Button from "../../ui/Button";

import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useProductFilter } from "./hooks/useProductFilter";

import { getHighestPrice } from "../../utils/getHighestPrice";

const AllProducts = () => {
  const [title, setTitle] = useState("All products");
  const [isFiltersOpen, setisFiltersOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [sortOptions, setSortOptions] = useState({
    from: 0,
    to: getHighestPrice(),
    discount: false,
    sortBy: "default",
    category: "All products",
  });

  const { sortedProducts } = useProductFilter(sortOptions, setTitle);

  const menuRef = useRef(null);
  useOutsideClick(menuRef, () => setisFiltersOpen(false));

  return (
    <div className="relative all-products h-full">
      <div className="fixed top-[103px] left-0 px-5 py-4 md:relative md:top-0 md:px-0 md:py-0 bg-white z-40 w-full flex items-center justify-between">
        <Title text={title} />
        <Button
          onClick={() => setisFiltersOpen(true)}
          text="Filters"
          extraClassName="px-6 py-[10px] md:hidden"
          isGreen
        />
      </div>
      <div ref={menuRef} className="relative flex items-center justify-between">
        <div
          className={`${
            isFiltersOpen ? "translate-x-[1%]" : "translate-x-[120%]"
          } flex flex-col duration-300 right-0 top-[110px] rounded-xl p-4 fixed border-2 bg-white z-40 md:hidden`}
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
      <div className="mt-16 md:mt-10 mb-2">
        <AllProductsSort
          className="hidden md:inline-grid"
          setIsUpdating={setIsUpdating}
          setOptions={setSortOptions}
        />
      </div>
      {isUpdating ? <Loader /> : <ProductsList list={sortedProducts} />}
    </div>
  );
};

export default AllProducts;
