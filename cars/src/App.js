import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarList";
import CarValue from "./components/CarValue";

const App = () => {
  return (
    <main>
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </main>
  );
};

export default App;
