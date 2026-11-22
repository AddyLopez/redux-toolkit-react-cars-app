import { createSlice, nanoid } from "@reduxjs/toolkit"; // nano id function from redux toolkit generates a random id

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      // Assumes action.payload will tell what new search term is
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumes that action.payload property will be an object that includes the name and cost. Cannot reach into formSlice for these properties.
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      // Assumes that action.payload includes the id of the car to be removed
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload; // filters out cars with the matching id and retains cars without the matching id
      });
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions; // destructures action creators from actions object
export const carsReducer = carsSlice.reducer; // carsSlice.reducer is the single combined reducer
