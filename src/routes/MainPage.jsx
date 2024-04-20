import { Helmet } from "react-helmet";

import Hero from "../components/Hero";
import Categories from "../components/Categories/Categories";
import Discount from "../components/Discount/Discount";
import Sale from "../components/Sale";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Garden</title>
        <meta name="description" content={`Garden`} />
      </Helmet>
      <main className="main">
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
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
