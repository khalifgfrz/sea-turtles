import { createBrowserRouter } from "react-router-dom";

import Index from "./pages/Index";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import DetailOrder from "./pages/DetailOrder";
import DetailProduct from "./pages/DetailProduct";
import HistoryOrder from "./pages/HistoryOrder";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import AdminIndex from "./pages/AdminIndex";

const router = createBrowserRouter([
  {
    path: "/admin/",
    element: <AdminIndex />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
    children: [
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/:uuid",
        element: <DetailProduct />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute to={"/login"}>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute to={"/login"}>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "order/:uuid",
        element: (
          <PrivateRoute to={"/login"}>
            <DetailOrder />
          </PrivateRoute>
        ),
      },
      {
        path: "history",
        element: (
          <PrivateRoute to={"/login"}>
            <HistoryOrder />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
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
