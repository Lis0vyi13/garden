import { useMemo } from "react";

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
    <section className="sale">
      <div className="container">
        <Title
          to="all-products?from=&to=&discount=true&sortBy=default"
          text="Sale"
          buttonText="All sales"
        />
        <ProductsList list={sales} />
      </div>
    </section>
  );
};

export default Sale;
