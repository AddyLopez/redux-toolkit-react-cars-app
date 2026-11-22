import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

// Exports the store along with all actions from all slices. Doing so makes this module the central place for components to access any action they might need.
export { store, addCar, removeCar, changeSearchTerm, changeName, changeCost };
