import { motion } from "framer-motion";

import CategoriesList from "./CategoriesList";

import Title from "../../ui/Title";

import { categoriesList } from "../../constants";

const Categories = ({ withButton }) => {
  const list = withButton ? categoriesList.slice(0, 4) : categoriesList;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
    >
      <div>
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
    </motion.div>
  );
};

export default Categories;
