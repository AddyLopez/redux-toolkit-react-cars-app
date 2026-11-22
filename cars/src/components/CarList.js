import { useSelector } from "react-redux";

const CarList = () => {
  const cars = useSelector((state) => {
    return state.cars.carsList; // component only needs access to cars slice of state
  });

  console.log(cars);

  return <div>CarList</div>;
};

export default CarList;
