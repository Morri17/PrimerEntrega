import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getProductos, getProductoPorCategoria } from "../../asyncmock";
import Card from "react-bootstrap/Card";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();
  console.log(idCategoria);

  useEffect(() => {
    const funcion = idCategoria ? getProductoPorCategoria : getProductos;

    funcion(idCategoria).then((res) => setProductos(res));
    console.log(idCategoria);
  }, [idCategoria]);

  return (
    <>
      <Card className="card">
        <Card.Body className="text-card">asdasdadsklasakdl</Card.Body>
      </Card>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
