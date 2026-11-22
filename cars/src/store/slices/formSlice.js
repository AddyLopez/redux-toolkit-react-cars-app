import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      // Assumes action.payload will tell what new name is
      state.name = action.payload;
    },
    changeCost(state, action) {
      // Assumes action.payload will tell what new cost is
      state.cost = action.payload;
    },
  },
});

export const { changeName, changeCost } = formSlice.actions; // destructure action creators from actions object
export const formReducer = formSlice.reducer; // formSlice.reducer is the single combined reducer
