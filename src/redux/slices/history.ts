import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { IHistory } from "../../types/history";

export interface historyState {
  history: IHistory[];
  loading: boolean;
  error: string | null;
}

const initialState: historyState = {
  history: [],
  loading: false,
  error: null,
};

export const historyThunk = createAsyncThunk<IHistory[], void, { state: RootState }>("order/history", async (_, { getState }) => {
  const state = getState() as RootState;
  const token = state.auth.token;
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/order/get/history`;

  const result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data.data;
});

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(historyThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(historyThunk.fulfilled, (state, action: PayloadAction<IHistory[]>) => {
        state.loading = false;
        state.history = action.payload;
      })
      .addCase(historyThunk.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export const historyAction = {
  ...historySlice.actions,
  historyThunk,
};

export default historySlice.reducer;
