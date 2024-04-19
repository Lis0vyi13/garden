import Hero from "../components/Hero";
import Categories from "../components/Categories/Categories";
import Discount from "../components/Discount/Discount";
import Sale from "../components/Sale";

const MainPage = () => {
  return (
    <section className="flex flex-col gap-10 md:gap-20">
      <Hero />
      <section className="categories">
        <div className="container">
          <Categories withButton={true} />
        </div>
      </section>
      <Discount />
      <Sale />
    </section>
  );
};

export default MainPage;
