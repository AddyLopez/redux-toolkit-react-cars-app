import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { carsList, searchTerm } }) => {
    const filteredCars = carsList.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase()); // return car(s) rom list that include(s) the given search term
    });

    return filteredCars.reduce((accumulator, car) => {
      return accumulator + car.cost;
    }, 0); // initialize accumultor to 0
  });

  return <section className="car-value">Total Cost: ${totalCost}</section>;
};

export default CarValue;
