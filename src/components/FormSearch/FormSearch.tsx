/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import useCategories from "../../hooks/useCategories";
import useDrinks from "../../hooks/UseDrinks";

const FormSearch = () => {
  const [search, setSearch] = useState({ name: "", category: "" });
  const [alert, setAlert] = useState("");

  const { categories }: any = useCategories();
  const { getDrink }: any = useDrinks();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son requeridos");
      return;
    }
    setAlert("");
    getDrink(search);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {alert && (
        <Alert variant="danger" className="text-center">
          {alert}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Nombre de la bebida</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Nombre: Tequila"
              name="name"
              value={search.name}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="category">Categoria de la bebida</Form.Label>
            <Form.Select
              id="category"
              placeholder="Nombre: Tequila"
              name="category"
              value={search.category}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>- Selecciona categoria -</option>
              {categories?.map((category: any) => (
                <option value={category.strCategory} key={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            type="submit"
            variant="danger"
            className="text-uppercase w-100"
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormSearch;
