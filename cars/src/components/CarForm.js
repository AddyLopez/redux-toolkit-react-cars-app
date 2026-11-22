import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost } from "../store"; // action creator

const CarForm = () => {
  const dispatch = useDispatch();

  // useSelector hook gives to access state
  const { name, cost } = useSelector((state) => {
    // state argument represents whole state object
    return {
      name: state.form.name,
      cost: state.form.cost,
    }; // component only needs access to name and cost pieces of state
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value)); // dispatch changeName action to update state, provide user text input as argument for action.payload
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0; // Parse event string as an integer. If input is NaN, set it to zero.
    dispatch(changeCost(carCost)); // dispatch changeCost action to update state, provide number input as argument for action.payload
  };

  return (
    <section className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
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
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default CarForm;
