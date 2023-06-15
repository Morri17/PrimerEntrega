import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import Container from "react-bootstrap/Container";


const Item = ({ id, nombre, precio, img }) => {
  return (
    <>
    
      <Container>
        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <CardImg img src={img} alt=""></CardImg>
            <hr />
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>${precio}</Card.Text>
            <Card.Text>Descripcion del producto</Card.Text>
          </Card.Body>
        </Card>
        </Container>
    
    </>
  );
};

export default Item;
