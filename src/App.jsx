import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./layouts/Layout";

import Loader from "./components/Loader/Loader";

const MainPage = lazy(() => import("./routes/MainPage"));
const CateroriesPage = lazy(() => import("./routes/CateroriesPage"));
const AllProductsPage = lazy(() => import("./routes/AllProductsPage"));
const Page404 = lazy(() => import("./routes/Page404"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <MainPage />
              </Suspense>
            }
          />
          <Route
            path="categories"
            element={
              <Suspense fallback={<Loader />}>
                <CateroriesPage />
              </Suspense>
            }
          />
          <Route
            path="all-products"
            element={
              <Suspense fallback={<Loader />}>
                <AllProductsPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loader />}>
                <Page404 />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

