import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import Loader from "./components/Loader/Loader";

const MainPage = lazy(() => import("./routes/MainPage"));
const CateroriesPage = lazy(() => import("./routes/CateroriesPage"));
const AllProductsPage = lazy(() => import("./routes/AllProductsPage"));

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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

