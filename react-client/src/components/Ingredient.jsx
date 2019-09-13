import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import IngredientList from "./IngredientList.jsx";

const Ingredient = props => {
  return props.ingredients.map(ingredient => {
    return (
      <Col
        xl={{ size: 3, offset: 0 }}
        md={{ size: 4, offset: 0 }}
        xs={{ size: 10, offset: 1 }}
        className="mb-3"
      >
        <Card id="ingredient-card">
          <CardImg top width="100%" src={ingredient.URL} alt="Card image cap" />
          <CardBody className="bg-light">
            <CardTitle className="card-title">{ingredient.Name}</CardTitle>

            <hr></hr>
            <CardText>{ingredient.Description}</CardText>
            <hr></hr>
            <Button className="card-button col-12">Where to find them</Button>
            <Button className="card-button col-12">How to prepare them</Button>
            <Button className="card-button col-12">Add to recipe</Button>
          </CardBody>
        </Card>
      </Col>
    );
  });
};
export default Ingredient;
