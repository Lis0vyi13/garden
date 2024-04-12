import { useMemo } from "react";
import { Link } from "react-router-dom";
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
        <Link to="all-products?from=&to=&discount=true&sortBy=default">
          <Title text="Sale" buttonText="All sales" />
        </Link>
        <ProductsList list={sales} />
      </div>
    </section>
  );
};

export default Sale;
