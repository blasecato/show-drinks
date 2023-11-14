import { useEffect, useState, createContext } from "react";
import axios from "axios";

const CategoryContex = createContext({});

interface Props {
  children: React.ReactElement;
}

const CategoryProvider = ({ children }: Props) => {
  const [categories, setCategories] = useState();
  const getCategories = async () => {
    try {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const { data } = await axios(url);
      setCategories(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories);

  return (
    <CategoryContex.Provider value={{ categories }}>
      {children}
    </CategoryContex.Provider>
  );
};
export { CategoryProvider };

export default CategoryContex;
