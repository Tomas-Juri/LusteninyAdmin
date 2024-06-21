import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type AuthState = {
  isAuthorized: boolean;
  email: string;
};

const initialState: AuthState = {
  isAuthorized: false,
  email: ""
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions;

export default authSlice.reducer;
