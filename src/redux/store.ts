import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { PersistConfig } from "redux-persist/lib/types";
import storage from "redux-persist/lib/storage";

import authReducer, { AuthState } from "./slices/auth";
import registerReducer from "./slices/register";
import checkoutReducer, { CheckoutState } from "./slices/checkout";
import productReducer from "./slices/product";
import getUserReducer from "./slices/getUser";
import updateUserReducer from "./slices/updateUser";
import detailOrderReducer from "./slices/detailOrder";
import historyReducer from "./slices/history";
import favoriteReducer from "./slices/favorite";
import detailProductReducer from "./slices/detailProduct";

const authPersistConfig: PersistConfig<AuthState> = {
  key: "auth:coffee",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const checkoutPersistConfig: PersistConfig<CheckoutState> = {
  key: "checkout:coffee",
  storage,
};

const persistedCheckoutReducer = persistReducer(checkoutPersistConfig, checkoutReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    register: registerReducer,
    checkout: persistedCheckoutReducer,
    product: productReducer,
    detailProduct: detailProductReducer,
    getUser: getUserReducer,
    detailOrder: detailOrderReducer,
    history: historyReducer,
    favorite: favoriteReducer,
    updateuser: updateUserReducer,
  },
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
