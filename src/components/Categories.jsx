import { Link } from "react-router-dom";

import Title from "../ui/Title";
import { categoriesList } from "../constants";

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <Title text={"Categories"} buttonText="All categories" />
        <ul className="categories-list grid align-top grid-cols-4 mt-10">
          {categoriesList.map((category) => {
            return (
              <li
                key={category.name}
                className="category w-[316px] h-[420px] duration-300"
                style={{ position: "relative" }}
              >
                <Link
                  to={category.url}
                  className="flex flex-col gap-4 items-center"
                >
                  <div className="relative rounded-[6px] img w-full h-[350px] overflow-hidden">
                    <img
                      className="hover:scale-150 transition-transform duration-500"
                      src={category.href}
                      alt={category.name}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                      }}
                    />
                  </div>
                  <h3 className="text-xl text-center max-w-[315px]">
                    {category.name}
                  </h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
