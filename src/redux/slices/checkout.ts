import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type checkout = {
  getProducts: IDetailProduct[];
  orderTotal: number;
};

export interface IDetailProduct {
  uuid?: string;
  count: number;
  size?: "Regular" | "Medium" | "Large";
  delivery?: string;
  ice?: boolean;
  image?: string;
  product_name?: string;
  price: number;
}

const initialState: checkout = {
  getProducts: [],
  orderTotal: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IDetailProduct>) => {
      const existingProduct = state.getProducts.find(
        (product: { uuid?: string; size?: string; delivery?: string; ice?: boolean }) =>
          product.uuid === action.payload.uuid && product.size === action.payload.size && product.delivery === action.payload.delivery && product.ice === action.payload.ice
      );
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.getProducts.push(action.payload);
      }
      state.orderTotal = state.getProducts.reduce((total, product) => total + product.price * product.count, 0);
    },
    deleteProducts: (state, action: PayloadAction<number>) => {
      state.getProducts = state.getProducts.filter((_, index) => index !== action.payload);
      state.orderTotal = state.getProducts.reduce((total, product) => total + product.price * product.count, 0);
    },
    deleteAllProducts: (state) => {
      state.getProducts = [];
      state.orderTotal = 0;
    },
  },
});

export const { deleteProducts, setProducts, deleteAllProducts } = checkoutSlice.actions;
export type CheckoutState = ReturnType<typeof checkoutSlice.reducer>;
export default checkoutSlice.reducer;
