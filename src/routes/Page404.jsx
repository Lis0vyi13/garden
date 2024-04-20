import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import PageWrapper from "../layouts/PageWrapper";

import Footer from "../components/Footer";

import Title from "../ui/Title";
import Button from "../ui/Button";

import kiwi from "/images/kiwi.webp";

const Page404 = () => {
  return (
    <>
      <Helmet>
        <title>Error</title>
        <meta name="description" content={`Error`} />
      </Helmet>
      <main className="main">
        <PageWrapper block="page-404">
          <div className="flex flex-col justify-center gap-6 items-center">
            <div className="flex justify-center items-center text-[60px] -mt-20 xs:-mt-10 md:mt-0 scale-[.41] xs:scale-[.65] sm:scale-75 md:scale-100">
              <span className="text-[300px] leading-none text-green font-bold">
                4
              </span>
              <img src={kiwi} alt="kiwi" />
              <span className="text-[300px] leading-none text-green font-bold">
                4
              </span>
            </div>
            <div className="flex justify-center text-center items-center flex-col gap-2 -mt-20 xs:-mt-10 md:mt-0">
              <Title text="Page Not Found" />
              <h5 className="text-[16px] md:text-[18px] max-w-[480px] md:max-w-[500px] text-gray">
                We&apos;re sorry, the page you requested could not be found.
                Please go back to the homepage.
              </h5>
            </div>
            <div>
              <Link to="/">
                <Button
                  text={"Go home"}
                  extraClassName="bg-green hover:bg-hoverGreen text-white"
                />
              </Link>
            </div>
          </div>
        </PageWrapper>
      </main>
      <Footer />
    </>
  );
};

export default Page404;
