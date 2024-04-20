import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import PageWrapper from "../layouts/PageWrapper";

import Footer from "../components/Footer";

import Button from "../ui/Button";

import { useActions } from "../hooks/useActions";

import cancel from "/icons/cancel.svg";
import success from "/icons/success.svg";

const CompletionPage = ({ result }) => {
  const { clearState } = useActions();
  const src = result === "success" ? success : cancel;
  const alt = result === "success" ? "success" : "cancel";
  const isSuccess = result === "success";

  if (isSuccess) clearState();

  return (
    <>
      <Helmet>
        <title>{result?.[0].toUpperCase() + result?.slice(1)}</title>
        <meta
          name="description"
          content={result?.[0].toUpperCase() + result?.slice(1)}
        />
      </Helmet>
      <main className="main">
        <PageWrapper block={`${alt}`}>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="bg-lightGray w-fit p-6 flex flex-col justify-center items-center gap-6 rounded-lg">
              <img width={60} src={src} alt={alt} />
              <h1 className="font-bold text-3xl text-center">
                {isSuccess ? "Payment successed" : "Payment canceled"}
              </h1>
              {isSuccess ? (
                <h3 className="-mt-2 pb-2 text-2xl text-gray text-center">
                  Thank you for your purchase.
                </h3>
              ) : (
                <h3 className="-mt-2 pb-2 text-2xl text-gray text-center">
                  Your payment was canceled.
                </h3>
              )}
              <Link to="/">
                <Button
                  text={"Return to Home"}
                  extraClassName={`text-white w-full ${
                    isSuccess ? "" : "bg-red hover:bg-hoverRed"
                  }`}
                  isGreen={isSuccess}
                />
              </Link>
            </div>
          </div>
        </PageWrapper>
      </main>
      <Footer />;
    </>
  );
};

export default CompletionPage;
