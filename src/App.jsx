// JSX = ES UNA EXTENSION DE JS.
// import ItemCount from "./Componentes/ItemCount/ItemCount";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import Header from "./Componentes/NavBar-Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import TituloPrincipal from "./Componentes/TituloPrincipal/TituloPrincipal";

const App = () => {
  // Se escribe la parte logica.

  // En le return vamos a retornar la interfaz del usuario.
  return (
    <>
      <div className="background">
        <Header />
        <ItemListContainer
          greeting={
            "Aquí encontrarás una amplia selección de productos de alta calidad, diseñados para satisfacer tus necesidades y superar tus expectativas. Nuestro equipo está dedicado a brindarte una experiencia de compra excepcional, con opciones de entrega rápidas y seguras, atención al cliente de primer nivel y ofertas irresistibles. Explora nuestro catálogo, descubre promociones exclusivas y déjanos sorprenderte con nuestro compromiso de calidad."
          }
        />
      </div>
    </>
  );
};

export default App;

// Cada componente debe retornar SOLO UN elemento.
