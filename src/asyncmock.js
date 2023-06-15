import campera from "../public/Imagenes/campera.webp";
import buzo from "../public/Imagenes/buzo.jpg";
import pantalones from "../public/Imagenes/pantalones.webp";
import remera from "../public/Imagenes/remera.jpeg";


const misProductos = [
  { id: 1, nombre: "Camperas", precio: 500, img: campera},
  { id: 3, nombre: "Remeras", precio: 200, img: remera },
  { id: 3, nombre: "Buzos", precio: 180, img: buzo },
  { id: 4, nombre: "Pantalones", precio: 900, img: pantalones },
];

export const getProductos = () => {
    return new Promise((resolve) =>{
        setTimeout( () =>
        resolve(misProductos));
    }, 2000)
    
}