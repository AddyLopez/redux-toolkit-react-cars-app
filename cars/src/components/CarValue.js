import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { carsList, searchTerm } }) => {
    const filteredCars = carsList.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase()); // return car(s) rom list that include(s) the given search term
    });
    let cost = 0;
    for (let car of filteredCars) {
      cost += car.cost;
    }
    return cost;
  });

  return <section className="car-value">Total Cost: ${totalCost}</section>;
};

export default CarValue;
