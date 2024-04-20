import { Helmet } from "react-helmet";

import PageWrapper from "../layouts/PageWrapper";

import AllProducts from "../components/AllProducts";
import Footer from "../components/Footer";

const AllProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>All products</title>
        <meta name="description" content={`All products`} />
      </Helmet>
      <main className="main">
        <PageWrapper block="all-products">
          <AllProducts />
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
};

export default AllProductsPage;
