import { Helmet } from "react-helmet";

import PageWrapper from "../layouts/PageWrapper";

import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer";

const CateroriesPage = () => {
  return (
    <>
      <Helmet>
        <title>Categories</title>
        <meta name="description" content={`Categories`} />
      </Helmet>
      <main className="main">
        <PageWrapper block="categories">
          <Categories />
        </PageWrapper>
      </main>
      <Footer />;
    </>
  );
};

export default CateroriesPage;
