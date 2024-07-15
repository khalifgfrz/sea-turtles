import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type product = {
  getProducts: IDetailProduct[];
  orderTotal: number;
};

export interface IDetailProduct {
  uuid?: string;
  product_id?: number;
  count: number;
  size?: number;
  // delivery?: number;
  // payment?: number;
  ice?: boolean;
  image?: string;
  product_name?: string;
  price: number;
}

const initialState: product = {
  getProducts: [],
  orderTotal: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IDetailProduct>) => {
      const existingProduct = state.getProducts.find(
        (product: { uuid?: string; size?: number; delivery?: number; payment?: number; ice?: boolean }) => product.uuid === action.payload.uuid && product.size === action.payload.size && product.ice === action.payload.ice
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

export const { deleteProducts, setProducts, deleteAllProducts } = productSlice.actions;
export type ProductState = ReturnType<typeof productSlice.reducer>;
export default productSlice.reducer;
