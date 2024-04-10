import Title from "../ui/Title";
import CategoriesList from "./CategoriesList";

import { categoriesList } from "../constants";

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <Title text="Categories" buttonText="All categories" />
        <CategoriesList list={categoriesList} extra="mt-10" />
      </div>
    </section>
  );
};

export default Categories;
