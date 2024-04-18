import CategoriesList from "./CategoriesList";

import Title from "../../ui/Title";

import { categoriesList } from "../../constants";

const Categories = ({ withButton }) => {
  const list = withButton ? categoriesList.slice(0, 4) : categoriesList;
  return (
    <section className="categories">
      <div className="container">
        {withButton ? (
          <Title
            to="categories"
            text="Categories"
            buttonText="All categories"
          />
        ) : (
          <Title text="Categories" />
        )}
        <CategoriesList list={list} extra="mt-10" />
      </div>
    </section>
  );
};

export default Categories;
