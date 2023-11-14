/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Card, Button } from "react-bootstrap";
import UseDrinks from "../../hooks/UseDrinks";
interface ObjetDrink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface Props {
  drink: ObjetDrink;
}
const CardDrink = ({ drink }: Props) => {
  const { handleModalClick, handleDrinkId }: any = UseDrinks();
  return (
    <Col md={6} lg={3}>
      <Card>
        <Card.Img
          variant="top"
          src={drink.strDrinkThumb}
          alt={`imagen de la ${drink.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
          <Button
            className="w-100 mt-3"
            variant="warning"
            onClick={() => {
              handleModalClick();
              handleDrinkId(drink.idDrink);
            }}
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardDrink;
