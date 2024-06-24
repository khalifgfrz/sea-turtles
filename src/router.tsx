import { Outlet, createBrowserRouter } from "react-router-dom";

import Profile from "./pages/Profile";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import DetailOrder from "./pages/DetailOrder";
import DetailProduct from "./pages/DetailProduct";
import HistoryOrder from "./pages/HistoryOrder";

function Error() {
  return <div>Error</div>;
}

function NotFound() {
  return <div className="my-[45%] md:my-[25%] px-[5%] tbt:px-[10%]">Route Not Found</div>;
}

// const router = createBrowserRouter([
//   {
//     path: "/class",
//     element: <Class />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/function",
//     element: <Function />,
//   },
//   {
//     path: "/position",
//     element: <Position />,
//   },
//   {
//     path: "/shop",
//     element: <Shop />,
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

function Index() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const routerWithChildren = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "detail-order",
        element: <DetailOrder />,
      },
      {
        path: "detail-product",
        element: <DetailProduct />,
      },
      {
        path: "history-order",
        element: <HistoryOrder />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routerWithChildren;
