import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

const App = () => {
  return (
    <main className="container is-fluid">
      <h1>Redux Toolkit with React Cars Application</h1>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
      <footer>
        <a
          href="https://github.com/AddyLopez/redux-toolkit-react-cars-app"
          target="_blank"
          title="To GitHub repository"
        >
          Coded by Addy López
        </a>
      </footer>
    </main>
  );
};

export default App;
