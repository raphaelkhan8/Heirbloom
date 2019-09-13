import React, { Fragment } from "react";
import Ingredient from "./Ingredient.jsx";
import { Container, Row, Col } from "reactstrap";
import NavBar from "./NavBar.jsx";

const IngredientList = props => {
  const { user, ingredients } = props;
  return (
    <Fragment>
      <NavBar user={user} />
      <Container fluid>
        <Row className="mt-10 ml-1">
          <Col xs={{ size: 9 }}>
            <h1 className="headline">
              Here&rsquo;s what&rsquo;s fresh in New Orleans.
            </h1>
            <p>
              Not in New Orleans? Click <a>Here.</a>
            </p>
          </Col>
        </Row>
        <Row className="ml-1">
          <Ingredient ingredients={ingredients} />
        </Row>
      </Container>
    </Fragment>
  );
};

export default IngredientList;
