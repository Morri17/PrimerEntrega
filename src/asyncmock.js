import campera from "../src/assets/Imagenes/campera.webp";
import buzo from "../src/assets/Imagenes/buzo.jpg";
import pantalones from "../src/assets/Imagenes/pantalones.webp";
import remera from "../src/assets/Imagenes/remera.jpeg";

const misProductos = [
  { id: "1", nombre: "Camperas", precio: 500, img: campera, idCat: "buzos"  },
  { id: "2", nombre: "Remeras", precio: 200, img: remera, idCat: "buzos" },
  { id: "3", nombre: "Buzos", precio: 180, img: buzo, idCat: "pantalones" },
  { id: "4", nombre: "Pantalones", precio: 900, img: pantalones, idCat: "pantalones" },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(misProductos));
  }, 100);
};

// creamos una nueva funcion simiar a la anterior pero que nos retorne un solo item.

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find(prod => prod.id === id);
      resolve(producto);
    }, 100)
  });
};

export const getProductoPorCategoria = (idCategoria) =>{
  return new promise(resolve =>{
    setTimeout(() => {
      const productosCaterogia = misProductos.filter(prod => prod.idCat === idCategoria);
      resolve(productosCaterogia);
    }, 100);
  });
};