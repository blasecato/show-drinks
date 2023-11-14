import { Container } from "react-bootstrap";
import FormSearch from "./components/FormSearch/FormSearch";
import ListDrinks from "./components/ListDrinks/ListDrinks";
import ModalDrink from "./components/ModalDrink/ModalDrink";
import { CategoryProvider } from "./contex/CategoryProvider";
import { DrinksProvider } from "./contex/DrinksProvider";
function App() {
  return (
    <CategoryProvider>
      <DrinksProvider>
        <>
          <ModalDrink />
          <header className="py-5">
            <h1>Buscador de bebidas</h1>
          </header>
          <Container className="mt-5">
            <FormSearch />
            <ListDrinks />
          </Container>
        </>
      </DrinksProvider>
    </CategoryProvider>
  );
}

export default App;
