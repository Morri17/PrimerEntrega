import "./ItemListContainer.css";
import Card from "react-bootstrap/Card";

const ItemListContainer = (props) => {
  return (
    <Card className="card">
      <Card.Body className="text-card" >{props.greeting}</Card.Body>
    </Card>
  );
};

export default ItemListContainer;
