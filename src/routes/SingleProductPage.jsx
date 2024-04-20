import { memo } from "react";

import PageWrapper from "../layouts/PageWrapper";

import SingleProduct from "../components/SingleProduct";
import Footer from "../components/Footer";

const SingleProductPageInitial = () => {
  return (
    <>
      <main className="main">
        <PageWrapper block={`single-product`}>
          <SingleProduct />
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
};

const SingleProductPage = memo(SingleProductPageInitial);

export default SingleProductPage;
