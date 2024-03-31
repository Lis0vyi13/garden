import Title from "../ui/Title";
import GridList from "./GridList";

import { categoriesList } from "../constants";

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <Title text="Categories" buttonText="All categories" />
        <GridList list={categoriesList} extra="mt-10" />
      </div>
    </section>
  );
};

export default Categories;
