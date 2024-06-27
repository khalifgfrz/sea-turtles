// import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./styles/main.css";

import router from "./router";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <AuthProvider>
    {/* <ProductProvider> */}
    <RouterProvider router={router} />
    {/* </ProductProvider> */}
  </AuthProvider>
  // </React.StrictMode>
);
