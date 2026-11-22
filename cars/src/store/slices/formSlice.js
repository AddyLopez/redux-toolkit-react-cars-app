import { createSlice } from "@reduxjs/toolkit";

// The formSlice takes care of state related to the form: updating the name and updating the cost based on the user's input
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

export const { changeName, changeCost } = formSlice.actions; // destructures action creators from actions object
export const formReducer = formSlice.reducer; // formSlice.reducer is the single combined reducer
