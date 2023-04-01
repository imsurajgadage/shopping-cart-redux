import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAdmin: false,
};

const adminSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    admin: (state) => {
      state.isAdmin = true;
    },
    notAdmin: (state) => {
      state.isAdmin = false;
    },
  },
});

export const { admin, notAdmin } = adminSlice.actions;
export default adminSlice.reducer;
