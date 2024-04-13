import { useState, useEffect } from "react";

import ProductsCardItem from "./ProductsCardItem";

import Loader from "../../Loader/Loader";
import Button from "../../../ui/Button";

const ProductsList = ({ list }) => {
  const [paginationValue, setPaginationValue] = useState({ min: 0, max: 20 });
  const [currentList, setCurrentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const updatedMax = Math.min(paginationValue.max, list.length);
      setCurrentList(
        list.slice(paginationValue.min, updatedMax).map((prod) => {
          return <ProductsCardItem key={prod.name} {...prod} />;
        }),
      );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [list, paginationValue]);

  return (
    <div className="flex flex-col -mt-8 md:mt-0 sale__cards-wrapper justify-center">
      <div
        className={`sale__cards w-fit xl:w-full grid self-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 ${
          currentList.length > 0 ? "justify-items-center" : ""
        } `}
      >
        {currentList.length > 0 ? (
          currentList
        ) : (
          <span className="text-left">No matching products</span>
        )}
      </div>
      {isLoading && <Loader />}

      {list.length > paginationValue.max && (
        <Button
          text="Load more"
          isGreen
          extraClassName="self-center mt-6"
          onClick={() =>
            setPaginationValue((prev) => ({
              min: prev.min,
              max: prev.max + 20,
            }))
          }
        />
      )}
    </div>
  );
};

export default ProductsList;
