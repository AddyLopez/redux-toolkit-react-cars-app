import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store"; // action creator

const CarList = () => {
  const dispatch = useDispatch();

  const cars = useSelector((state) => {
    return state.cars.carsList; // component only needs access to cars slice of state
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
