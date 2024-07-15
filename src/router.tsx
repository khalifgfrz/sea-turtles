import { createBrowserRouter } from "react-router-dom";

import { Index } from "./pages/Home";
import { Products } from "./pages/Product";
import { CheckoutProduct } from "./pages/Checkout";
import { OrderDetail } from "./pages/DetailOrder";
import { DetailProducts } from "./pages/DetailProduct";
import { History } from "./pages/HistoryOrder";
import { Profiles } from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import LoginAdmin from "./pages/LoginAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute to={"/login"}>
        <Profiles />
      </PrivateRoute>
    ),
    errorElement: <Error />,
  },
  {
    path: "/product",
    element: <Products />,
    errorElement: <Error />,
  },
  {
    path: "/checkout",
    element: (
      <PrivateRoute to={"/login"}>
        <CheckoutProduct />
      </PrivateRoute>
    ),
    errorElement: <Error />,
  },
  {
    path: "/order/:uuid",
    element: (
      <PrivateRoute to={"/login"}>
        <OrderDetail />
      </PrivateRoute>
    ),
    errorElement: <Error />,
  },
  {
    path: "/product/:uuid",
    element: <DetailProducts />,
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
    path: "/login/admin",
    element: <LoginAdmin />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
