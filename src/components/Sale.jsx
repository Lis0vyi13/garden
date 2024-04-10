import { useMemo } from "react";

import ProductsList from "./ProductsList";
import ProductsCardItem from "./ProductsCardItem";

import Title from "../ui/Title";

import { products } from "../constants";

const Sale = () => {
  const sales = useMemo(
    () =>
      products
        .filter((prod) => prod.discount)
        .reverse()
        .slice(0, 4)
        .map((prod) => {
          return <ProductsCardItem key={prod.name} {...prod} />;
        }),
    [],
  );
  return (
    <section className="sale">
      <div className="container">
        <Title text="Sale" buttonText="All sales" />
        <ProductsList list={sales} />
      </div>
    </section>
  );
};

export default Sale;
