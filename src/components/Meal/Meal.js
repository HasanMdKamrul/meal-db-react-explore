import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Meal({ meal: { strMeal, strMealThumb, strInstructions, strYoutube } }) {
  return (
    <Col md={4} className="g-4" >
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>
            {strInstructions.length > 50 ? strInstructions.slice(0,50) : strInstructions}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default Meal;
