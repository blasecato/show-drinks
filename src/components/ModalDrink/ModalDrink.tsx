/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal, Image } from "react-bootstrap";
import UseDrinks from "../../hooks/UseDrinks";

const ModalDrink = () => {
  const { isModal, handleModalClick, recipe, loading, setRecipe }: any =
    UseDrinks();

  const ShowIngredients = () => {
    const ingradients = [];
    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingradients.push(
          <li>
            {recipe[`strIngredient${i}`]}: {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingradients;
  };

  return (
    !loading && (
      <Modal
        show={isModal}
        onHide={() => {
          handleModalClick();
          setRecipe({});
        }}
      >
        <Image
          src={recipe?.strDrinkThumb}
          alt={`imagen receta ${recipe.strDrink}`}
        />
        <Modal.Header>
          <Modal.Title>{recipe.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <h2>Instrucciones</h2>
            {recipe.strInstructions}
            <h2>Ingradientes y Cantidades</h2>
            {ShowIngredients()}
          </div>
        </Modal.Body>
      </Modal>
    )
  );
};

export default ModalDrink;
