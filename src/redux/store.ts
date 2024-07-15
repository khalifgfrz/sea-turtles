import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { PersistConfig } from "redux-persist/lib/types";
import storage from "redux-persist/lib/storage";

import authReducer, { AuthState } from "./slices/auth";
import authAdminReducer, { AuthAdminState } from "./slices/authAdmin";
import productReducer, { ProductState } from "./slices/product";

const authAdminPersistConfig: PersistConfig<AuthState> = {
  key: "admin:coffee",
  storage,
  whitelist: ["token"],
};

const persistedAuthAdminReducer = persistReducer(authAdminPersistConfig, authAdminReducer);

const authPersistConfig: PersistConfig<AuthAdminState> = {
  key: "auth:coffee",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const productPersistConfig: PersistConfig<ProductState> = {
  key: "product:coffee",
  storage,
};

const persistedProductReducer = persistReducer(productPersistConfig, productReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    authAdmin: persistedAuthAdminReducer,
    product: persistedProductReducer,
  },
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
