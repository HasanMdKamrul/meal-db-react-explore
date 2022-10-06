import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Restaurant = () => {
  const { meals } = useLoaderData();

  return (
    <div>
      <Container>
        <Row>
       
            {meals.map((meal) => (
              <Meal meal={meal} key={meal.idMeal} />
            ))}
        
        </Row>
      </Container>
    </div>
  );
};

export default Restaurant;
