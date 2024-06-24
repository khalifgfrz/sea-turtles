import { Outlet, createBrowserRouter } from "react-router-dom";

import Profile from "./pages/Profile";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import DetailOrder from "./pages/DetailOrder";

function NotFound() {
  return <div>Not Found</div>;
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
    errorElement: <NotFound />,
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
    ],
  },
]);

export default routerWithChildren;
