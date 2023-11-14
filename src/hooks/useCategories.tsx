import { useContext } from "react";
import CategoryContex from "../contex/CategoryProvider";

const useCategories = () => {
  return useContext(CategoryContex);
};

export default useCategories;
