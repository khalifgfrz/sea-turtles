import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import Swal from "sweetalert2";

export interface IRegisterState {
  isLoading: boolean;
  isRegisterSuccess: boolean;
  isRegisterFailed: boolean;
}

const initialState: IRegisterState = {
  isLoading: false,
  isRegisterSuccess: false,
  isRegisterFailed: false,
};

export const registerThunk = createAsyncThunk<void, { full_name: string; email: string; pwd: string }, { rejectValue: { error: Error | string; status?: number } }>("auth/register", async (form, { rejectWithValue }) => {
  try {
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/register`;
    await axios.post(url, form);
    Swal.fire({
      title: "Success!",
      text: "Register Success!",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
      position: "top-end",
      background: "#fff",
      color: "#0B0909",
      customClass: {
        popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
      },
      toast: true,
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      Swal.fire({
        title: "Error!",
        text: error.response?.data?.err || "An error occurred during registration!",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
        position: "top-end",
        background: "#fff",
        color: "#0B0909",
        customClass: {
          popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
        },
        toast: true,
      });
      return rejectWithValue({ error: error.response?.data, status: error.status });
    }
    return rejectWithValue({ error: "Unknown error occurred." });
  }
});

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.isLoading = true;
        state.isRegisterSuccess = false;
        state.isRegisterFailed = false;
      })
      .addCase(registerThunk.rejected, (state) => {
        state.isLoading = false;
        state.isRegisterFailed = true;
      })
      .addCase(registerThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isRegisterSuccess = true;
      });
  },
});
export const registerAction = {
  ...registerSlice.actions,
  registerThunk,
};

export default registerSlice.reducer;
