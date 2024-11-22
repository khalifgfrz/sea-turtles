// src/redux/slices/userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { IProfileBody } from "../../types/profile";

export interface getUserState {
  profile: IProfileBody | null;
  loading: boolean;
  error: string | null;
}

const initialState: getUserState = {
  profile: null,
  loading: false,
  error: null,
};

export const getUserThunk = createAsyncThunk<IProfileBody, void, { state: RootState }>("user/fetchUser", async (_, { getState }) => {
  const state = getState() as RootState;
  const token = state.auth.token;
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user`;

  const result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data.data[0];
});

const getUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IProfileBody>) => {
      state.profile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserThunk.fulfilled, (state, action: PayloadAction<IProfileBody>) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getUserThunk.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export const { setProfile } = getUserSlice.actions;

export const getUserAction = {
  ...getUserSlice.actions,
  getUserThunk,
};

export default getUserSlice.reducer;
