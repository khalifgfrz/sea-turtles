import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { IFavorite } from "../../types/favorite";

export interface favoriteState {
  favorites: IFavorite[];
  loading: boolean;
  error: string | null;
}

const initialState: favoriteState = {
  favorites: [],
  loading: false,
  error: null,
};

export const favoriteThunk = createAsyncThunk<IFavorite[], void, { state: RootState }>("favorite/getFavorite", async (_, { getState }) => {
  const state = getState() as RootState;
  const token = state.auth.token;
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/favorite`;

  const result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data.data;
});

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(favoriteThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(favoriteThunk.fulfilled, (state, action: PayloadAction<IFavorite[]>) => {
        state.loading = false;
        state.favorites = action.payload;
      })
      .addCase(favoriteThunk.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export const favoriteAction = {
  ...favoriteSlice.actions,
  favoriteThunk,
};

export default favoriteSlice.reducer;
