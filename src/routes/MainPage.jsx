import Hero from "../components/Hero";
import Categories from "../components/Categories";

const MainPage = () => {
  return (
    <section className="flex flex-col gap-20">
      <Hero />
      <Categories />
    </section>
  );
};

export default MainPage;
