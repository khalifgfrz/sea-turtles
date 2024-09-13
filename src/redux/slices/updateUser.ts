import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { useStoreSelector } from "../hooks";

export interface UpdateUserState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: UpdateUserState = {
  loading: false,
  error: null,
  success: false,
};

export const updateUserThunk = createAsyncThunk<string, FormData, { rejectValue: { error: Error; status?: number } }>("user/updateUserThunk", async (formData: FormData, { rejectWithValue }) => {
  try {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/settings`;
    const { token } = useStoreSelector((state) => state.auth);
    const result = await axios.patch(url, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return result.data;
  } catch (error) {
    if (error instanceof AxiosError) return rejectWithValue({ error: error.response?.data, status: error.status });
    return String(error);
  }
});

const updateUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updateUserThunk.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateUserThunk.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
        state.success = false;
      });
  },
});

export default updateUserSlice.reducer;
