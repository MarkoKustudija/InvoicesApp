import { createSlice } from "@reduxjs/toolkit";

const initialHomeStore = {
  isThereAnyInvoices: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialHomeStore,
  reducers: {
    check(state) {
      state.isThereAnyInvoices = true;
    },
  },
  
});

export const homeActions = homeSlice.actions;
export default homeSlice;
