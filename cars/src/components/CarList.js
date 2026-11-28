import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from "../store"; // action creator

// memoize list of cars to resolve a warning
const memoizedCars = createSelector(
  [(state) => state.cars.carsList, (state) => state.cars.searchTerm],
  (carsList, searchTerm) =>
    carsList.filter(
      (car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()), // return car(s) rom list that include(s) the given search term
    ),
);

const CarList = () => {
  const dispatch = useDispatch();

  const cars = useSelector(memoizedCars);

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id)); // dispatch removeCar action with car.id as action.payload
  };

  const renderedCars = cars.map((car) => {
    // p's text node below is JSX, not template literals or a math operation
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <section className="car-list">
      {renderedCars}
      <hr />
    </section>
  );
};

export default CarList;
