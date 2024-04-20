import { useMemo } from "react";
import { motion } from "framer-motion";

import ProductsList from "./AllProducts/ProductsTemplates/ProductsList";

import Title from "../ui/Title";

import { products } from "../constants";

const Sale = () => {
  const sales = useMemo(
    () =>
      products
        .filter((prod) => prod.discount)
        .reverse()
        .slice(0, 4),
    [],
  );
  return (
    <motion.section
      className="sale"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container">
        <Title
          to="all-products?from=&to=&discount=true&sortBy=default"
          text="Sale"
          buttonText="All sales"
        />
        <ProductsList list={sales} />
      </div>
    </motion.section>
  );
};

export default Sale;
