import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";

import ProductsCardItem from "./ProductsCardItem";

import Loader from "../../Loader/Loader";
import Button from "../../../ui/Button";

const ProductsListInitial = ({ list }) => {
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
    <motion.div
      className="flex flex-col -mt-8 md:mt-0 sale__cards-wrapper justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className={`sale__cards w-fit xl:w-full grid self-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 ${
          currentList.length > 0 ? "justify-items-center" : ""
        } `}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {currentList.length > 0 ? (
          currentList
        ) : (
          <span className="text-left">No matching products</span>
        )}
      </motion.div>
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
    </motion.div>
  );
};

const ProductsList = memo(ProductsListInitial);
export default ProductsList;
