/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const DrinksContex = createContext({});

interface Props {
  children: React.ReactElement;
}

const DrinksProvider = ({ children }: Props) => {
  const [drinks, setDrinks] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [isModal, setModal] = useState(false);
  const [idDrink, setIdDrink] = useState("");
  const [loading, setLoading] = useState(false);

  const getDrink = async (data: any) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data.name}&c=${data.category}`;
      const { data: drink } = await axios(url);
      setDrinks(drink.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClick = () => {
    setModal(!isModal);
  };
  const handleDrinkId = (id: string) => {
    setIdDrink(id);
  };

  useEffect(() => {
    setLoading(true);
    const getRecipe = async () => {
      if (!idDrink) return;

      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
        const { data: drink } = await axios(url);
        setRecipe(drink.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getRecipe();
  }, [idDrink]);

  return (
    <DrinksContex.Provider
      value={{
        getDrink,
        drinks,
        isModal,
        handleModalClick,
        handleDrinkId,
        recipe,
        setRecipe,
        loading,
      }}
    >
      {children}
    </DrinksContex.Provider>
  );
};
export { DrinksProvider };

export default DrinksContex;
