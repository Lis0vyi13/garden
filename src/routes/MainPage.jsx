import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Discount from "../components/Discount";
import Modal from "../components/Modal";

const MainPage = () => {
  return (
    <section className="flex flex-col gap-10 md:gap-20">
      <Hero />
      <Categories />
      <Discount />
      <Modal type="successOrder" />
    </section>
  );
};

export default MainPage;
