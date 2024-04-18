import PageWrapper from "../layouts/PageWrapper";

import SingleProduct from "../components/SingleProduct";
import { memo } from "react";

const SingleProductPageInitial = () => {
  return (
    <PageWrapper block={`single-product`}>
      <SingleProduct />
    </PageWrapper>
  );
};

const SingleProductPage = memo(SingleProductPageInitial);
export default SingleProductPage;
