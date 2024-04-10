import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Discount from "../components/Discount";
import Sale from "../components/Sale";
import Contact from "../components/Contact";

const MainPage = () => {
  return (
    <section className="flex flex-col gap-10 md:gap-20">
      <Hero />
      <Categories />
      <Discount />
      <Sale />
      <Contact />
    </section>
  );
};

export default MainPage;
