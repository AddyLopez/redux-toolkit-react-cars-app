import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store"; // action creator

const CarForm = () => {
  const dispatch = useDispatch();

  // useSelector hook gives to access state
  const name = useSelector((state) => {
    // state argument represents whole state object
    return state.form.name; // component only needs access to name piece of state
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value)); // dispatch changeName action to update state, provide user text input as argument for action.payload
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
        </div>
      </form>
    </section>
  );
};

export default CarForm;
