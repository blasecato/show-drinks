/* eslint-disable @typescript-eslint/no-explicit-any */
import useDrinks from "../../hooks/UseDrinks";
import { Row } from "react-bootstrap";
import CardDrink from "../CardDrink/CardDrink";

const ListDrinks = () => {
  const { drinks }: any = useDrinks();
  return (
    <Row className="mt-5">
      {drinks?.map((drink: any, index: number) => (
        <CardDrink drink={drink} key={`drink-${index}`} />
      ))}
    </Row>
  );
};

export default ListDrinks;
