import { useContext } from "react";
import DrinksProvider from "../contex/DrinksProvider";

const UseDrinks = () => {
  return useContext(DrinksProvider);
};

export default UseDrinks;
