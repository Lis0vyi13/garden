import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Discount from "../components/Discount";
import Sale from "../components/Sale";

const MainPage = () => {
  return (
    <section className="flex flex-col gap-10 md:gap-20">
      <Hero />
      <Categories withButton={true} />
      <Discount />
      <Sale />
    </section>
  );
};

export default MainPage;
