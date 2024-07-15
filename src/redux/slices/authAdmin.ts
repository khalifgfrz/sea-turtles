import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IAuthResponse } from "../../types/response";

export interface IAuthAdminState {
  token: string | null;
  isLoading: boolean;
  isRejected: boolean;
  isFulfilled: boolean;
}

const initialState = {
  token: "",
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
} satisfies IAuthAdminState as IAuthAdminState;

const loginAdminThunk = createAsyncThunk<string, { email: string; pwd: string; role: string }, { rejectValue: { error: Error; status?: number } }>("admin/login", async (form, { rejectWithValue }) => {
  try {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/login`;
    const result: AxiosResponse<IAuthResponse> = await axios.post(url, form);
    return result.data.data[0].token;
  } catch (error) {
    if (error instanceof AxiosError) return rejectWithValue({ error: error.response?.data, status: error.status });
    return String(error);
  }
});

const authAdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setToken: (prevState, { payload }: PayloadAction<IAuthAdminState>) => {
      const newState = {
        ...prevState,
        token: payload.token,
      };
      return newState;
    },
    removeToken: (prevState) => {
      prevState.token = initialState.token;
    },
    logout: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdminThunk.pending, (state) => {
        state.isLoading = true;
        state.isFulfilled = false;
        state.isRejected = false;
      })
      .addCase(loginAdminThunk.rejected, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.isRejected = true;
      })
      .addCase(loginAdminThunk.fulfilled, (state, { payload }) => {
        state.token = payload;
        state.isLoading = false;
        state.isFulfilled = true;
      });
  },
});

export const { setToken, removeToken, logout } = authAdminSlice.actions;

export const authAdminAction = {
  ...authAdminSlice.actions,
  loginAdminThunk,
};
export type AuthAdminState = ReturnType<typeof authAdminSlice.reducer>;
export default authAdminSlice.reducer;
