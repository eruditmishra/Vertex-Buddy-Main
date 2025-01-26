import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token:
    localStorage.getItem("token") !== "undefined"
      ? JSON.parse(localStorage.getItem("token"))
      : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken(state, value) {
      state.token = value.payload;
      localStorage.setItem("token", JSON.stringify(value.payload));
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
