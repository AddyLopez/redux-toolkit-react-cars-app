import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store"; // action creator

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm; // component only needs access to cars slice of state
  });

  const handleChangeSearchTerm = (event) => {
    dispatch(changeSearchTerm(event.target.value)); // dispatch changeSearchTerm action with typed user input as action.payload
  };

  return (
    <section className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </div>
    </section>
  );
};

export default CarSearch;
