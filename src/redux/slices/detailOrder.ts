import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IOrder } from "../../types/order";
import { RootState } from "../store";

export interface IOrderState {
  order: IOrder | null;
  loading: boolean;
  error: string | null;
}

const initialState: IOrderState = {
  order: null,
  loading: false,
  error: null,
};

export const detailOrderThunk = createAsyncThunk<IOrder, string, { state: RootState }>("order/detailOrder", async (uuid: string, { getState }) => {
  const state = getState() as RootState;
  const token = state.auth.token;
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/order/${uuid}`;
  const result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return result.data.data[0];
});

const detailOrderSlice = createSlice({
  name: "detailOrder",
  initialState,
  reducers: {
    setDetailOrder: (state, action: PayloadAction<IOrder>) => {
      state.order = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(detailOrderThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(detailOrderThunk.fulfilled, (state, action: PayloadAction<IOrder>) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(detailOrderThunk.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export const { setDetailOrder } = detailOrderSlice.actions;

export const detailOrderAction = {
  ...detailOrderSlice.actions,
  detailOrderThunk,
};

export default detailOrderSlice.reducer;
