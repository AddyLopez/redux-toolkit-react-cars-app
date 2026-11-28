import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store"; // action creator

const CarList = () => {
  const dispatch = useDispatch();

  // In useSelector below, carsList and searchTerm properties on cars slice of state are destructured from full state object
  const cars = useSelector(({ cars: { carsList, searchTerm } }) => {
    return carsList.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase()); // return car(s) rom list that include(s) the given search term
    });
  });

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
