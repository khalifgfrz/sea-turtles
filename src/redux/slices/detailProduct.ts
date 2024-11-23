import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IDetailProduct } from "../../types/product";

export interface IProductState {
  product: IDetailProduct | null;
  loading: boolean;
  error: string | null;
}

const initialState: IProductState = {
  product: null,
  loading: false,
  error: null,
};

export const detailProductThunk = createAsyncThunk<IDetailProduct, string, { rejectValue: { error: Error; status?: number } }>("product/getDetailProduct", async (uuid: string, { rejectWithValue }) => {
  try {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/product/${uuid}`;
    const response = await axios.get(url);
    return response.data.data[0];
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue({ error: error.response?.data, status: error.status });
    }
    return String(error);
  }
});

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(detailProductThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(detailProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(detailProductThunk.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export const detailOrderAction = {
  ...productDetailSlice.actions,
  detailProductThunk,
};

export default productDetailSlice.reducer;
