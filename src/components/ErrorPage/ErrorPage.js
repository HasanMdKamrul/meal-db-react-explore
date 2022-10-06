import Card from "react-bootstrap/Card";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const { statusText } = useRouteError();

  return (
    <Card className="text-center">
      <Card.Header>Error</Card.Header>
      <Card.Body>
        <Card.Title>{statusText}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ErrorPage;
