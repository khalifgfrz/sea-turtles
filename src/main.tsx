// import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { AuthProvider } from "./context/AuthContext";

import "./styles/main.css";

import router from "./router";
import { persistedStore, store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  // <AuthProvider>
  <ReduxProvider store={store}>
    <PersistGate persistor={persistedStore} loading={null}>
      <RouterProvider router={router} />
    </PersistGate>
  </ReduxProvider>
  // </AuthProvider>
  // </React.StrictMode>
);
