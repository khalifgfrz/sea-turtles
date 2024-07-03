import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type checkout = {
  uuid: string | null;
  TempProduct: IDetailProduct[];
};

export interface IDetailProduct {
  uuid?: string | null;
  count?: number | null;
  size?: string | null;
  ice?: boolean | null;
  image?: string;
  product_name?: string;
  price?: string;
}

const initialState: checkout = {
  uuid: null,
  TempProduct: [],
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setUuid: (state, action: PayloadAction<string>) => {
      state.uuid = action.payload;
    },
    deleteUuid: (state) => {
      state.uuid = null;
    },
    setTempProduct: (state, action: PayloadAction<IDetailProduct>) => {
      state.TempProduct.push(action.payload);
    },
    deleteTempProduct: (state, action: PayloadAction<number>) => {
      state.TempProduct = state.TempProduct.filter((_, index) => index !== action.payload);
    },
    deleteAllProduct: (state) => {
      state.TempProduct = [];
    },
  },
});

export const { setUuid, deleteUuid, deleteTempProduct, setTempProduct, deleteAllProduct } = checkoutSlice.actions;
export type CheckoutState = ReturnType<typeof checkoutSlice.reducer>;
export default checkoutSlice.reducer;
