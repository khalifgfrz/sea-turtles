import { createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import { DetailOrd } from "./pages/DetailOrder";
import DetailProduct from "./pages/DetailProduct";
import HistoryOrder from "./pages/HistoryOrder";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Error() {
  return <div>Error</div>;
}

function NotFound() {
  return <div>Route Not Found</div>;
}

function Index() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

function Prof() {
  return (
    <>
      <Header />
      <Profile />
      <Footer />
    </>
  );
}

function Prod() {
  return (
    <>
      <Header />
      <Product />
      <Footer />
    </>
  );
}

function Check() {
  return (
    <>
      <Header />
      <Checkout />
      <Footer />
    </>
  );
}

function DetailProd() {
  return (
    <>
      <Header />
      <DetailProduct />
      <Footer />
    </>
  );
}

function History() {
  return (
    <>
      <Header />
      <HistoryOrder />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
  },
  {
    path: "/profile",
    element: <Prof />,
    errorElement: <Error />,
  },
  {
    path: "/product",
    element: <Prod />,
    errorElement: <Error />,
  },
  {
    path: "/checkout",
    element: <Check />,
    errorElement: <Error />,
  },
  {
    path: "/detail-order",
    element: <DetailOrd />,
    errorElement: <Error />,
  },
  {
    path: "/detail-product",
    element: <DetailProd />,
    errorElement: <Error />,
  },
  {
    path: "/history-order",
    element: <History />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
