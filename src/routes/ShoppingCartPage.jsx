import { Helmet } from "react-helmet";

import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer";

import PageWrapper from "../layouts/PageWrapper";

const ShoppingCartPage = () => {
  return (
    <>
      <Helmet>
        <title>Shopping cart</title>
        <meta name="description" content={`Shopping cart`} />
      </Helmet>
      <main className="main">
        <PageWrapper block="shopping-cart">
          <Cart />
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
