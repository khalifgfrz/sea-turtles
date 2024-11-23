import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { IProductBody } from "../../types/product";

interface IFilters {
  category: string;
  sortBy: string;
  product_name: string;
  min_price: string;
  max_price: string;
}

interface IPagination {
  page: string;
  totalPages: number;
}

export interface IProductState {
  products: IProductBody[];
  loading: boolean;
  error: string | null;
  filters: IFilters;
  pagination: IPagination;
  minPrice: number;
  maxPrice: number;
}

const initialState: IProductState = {
  products: [],
  loading: false,
  error: null,
  filters: {
    product_name: "",
    category: "",
    sortBy: "",
    min_price: "",
    max_price: "",
  },
  pagination: {
    page: "1",
    totalPages: 1,
  },
  minPrice: 0,
  maxPrice: 100000,
};

export const productsThunk = createAsyncThunk<IProductBody[], void, { state: RootState }>("product/getProducts", async (_, { getState }) => {
  const state = getState();
  const { filters, pagination } = state.product;
  const { product_name, category, sortBy, min_price, max_price } = filters;
  const { page } = pagination;

  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/product`;
  const result = await axios.get(url, {
    params: { product_name, category, sortBy, min_price, max_price, page },
  });
  return result.data.data;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<IFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = {
        product_name: "",
        category: "",
        sortBy: "",
        min_price: "",
        max_price: "",
      };
      state.minPrice = 0;
      state.maxPrice = 100000;
      state.pagination = { page: "1", totalPages: 1 };
    },
    setPagination: (state, action: PayloadAction<Partial<IPagination>>) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
      state.filters.min_price = action.payload.toString();
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
      state.filters.max_price = action.payload.toString();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(productsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(productsThunk.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export const { setFilters, resetFilters, setPagination, setMinPrice, setMaxPrice } = productSlice.actions;
export const productAction = {
  ...productSlice.actions,
  productsThunk,
};
export default productSlice.reducer;
