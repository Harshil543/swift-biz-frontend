import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state: any, action: any) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    loginFailure: (state: any, action: any) => {
      state.error = action.payload;
    },
    logout: (state: any) => {
      state.user = null;
      state.isLoggedIn = false;
      state.error = null;
    }
  }
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
