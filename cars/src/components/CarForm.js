import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store"; // action creator

const CarForm = () => {
  const dispatch = useDispatch();

  // useSelector hook gives to access state. state argument below represents whole state object
  // component only needs access to name and cost pieces of state
  const name = useSelector((state) => state.form.name);
  const cost = useSelector((state) => state.form.cost);

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value)); // dispatch changeName action to update state, provide user text input as argument for action.payload
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0; // Parse event string as an integer. If input is NaN, set it to zero.
    dispatch(changeCost(carCost)); // dispatch changeCost action to update state, provide number input as argument for action.payload
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // dispatch addCar action to update the "cars" state with an object as action.payload
    dispatch(
      addCar({
        name,
        cost,
      }),
    );
  };

  return (
    <section className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default CarForm;
