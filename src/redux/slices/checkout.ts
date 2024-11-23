import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDetailProduct } from "../../types/product";

type checkout = {
  getProducts: IDetailProduct[];
  orderTotal: number;
};

const initialState: checkout = {
  getProducts: [],
  orderTotal: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckouts: (state, action: PayloadAction<IDetailProduct>) => {
      const existingCheckout = state.getProducts.find(
        (checkout: { uuid?: string; size?: number; delivery?: number; payment?: number; ice?: boolean }) => checkout.uuid === action.payload.uuid && checkout.size === action.payload.size && checkout.ice === action.payload.ice
      );
      if (existingCheckout) {
        existingCheckout.count += 1;
      } else {
        state.getProducts.push(action.payload);
      }
      state.orderTotal = state.getProducts.reduce((total, checkout) => total + checkout.price * checkout.count, 0);
    },
    deleteCheckouts: (state, action: PayloadAction<number>) => {
      state.getProducts = state.getProducts.filter((_, index) => index !== action.payload);
      state.orderTotal = state.getProducts.reduce((total, checkout) => total + checkout.price * checkout.count, 0);
    },
    deleteAllCheckouts: (state) => {
      state.getProducts = [];
      state.orderTotal = 0;
    },
  },
});

export const { deleteCheckouts, setCheckouts, deleteAllCheckouts } = checkoutSlice.actions;
export type CheckoutState = ReturnType<typeof checkoutSlice.reducer>;
export default checkoutSlice.reducer;
