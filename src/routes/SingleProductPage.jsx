import { memo } from "react";

import PageWrapper from "../layouts/PageWrapper";

import SingleProduct from "../components/SingleProduct";

const SingleProductPageInitial = () => {
  return (
    <PageWrapper block={`single-product`}>
      <SingleProduct />
    </PageWrapper>
  );
};

const SingleProductPage = memo(SingleProductPageInitial);

export default SingleProductPage;
