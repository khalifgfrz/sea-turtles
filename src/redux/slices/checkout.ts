import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type checkout = {
  products: IDetailProduct[];
};

export interface IDetailProduct {
  uuid?: string;
  count?: number;
  size?: "Regular" | "Medium" | "Large";
  delivery?: string;
  ice?: boolean;
  image?: string;
  product_name?: string;
  price?: number;
}

const initialState: checkout = {
  products: [],
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IDetailProduct>) => {
      state.products.push(action.payload);
    },
    deleteProducts: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((_, index) => index !== action.payload);
    },
    deleteAllProducts: (state) => {
      state.products = [];
    },
  },
});

export const { deleteProducts, setProducts, deleteAllProducts } = checkoutSlice.actions;
export type CheckoutState = ReturnType<typeof checkoutSlice.reducer>;
export default checkoutSlice.reducer;
