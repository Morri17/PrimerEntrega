import {useState, useEffect} from "react";
import "./ItemListContainer.css";
import {getProductos} from "../../asyncmock";
import Card from "react-bootstrap/Card";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {

  const [productos, setProductos] = useState([]);

  useEffect(() =>{
    getProductos()
    .then(respuesta => setProductos(respuesta));

  }, [])
  return (
    <>
    <Card className="card">
      <Card.Body className="text-card" >{props.greeting}</Card.Body>
    </Card>
    <ItemList productos={productos}/>
    </>
  );
};

export default ItemListContainer;
