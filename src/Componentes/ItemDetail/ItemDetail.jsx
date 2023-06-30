

const ItemDetail = ({ idCat, nombre, precio, img }) => {
  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facilis quis autem expedita non mollitia, fugit veniam exercitationem iusto possimus.</p>
      <div><img src={img} alt={nombre} /></div>
    </div>
  );
};

export default ItemDetail
