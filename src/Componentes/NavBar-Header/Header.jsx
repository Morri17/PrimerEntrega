import "./Header.css";
import CartWidget from "../CarWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

// El archivo css esta vacio porque esta utilizando estilos de boostrap.

const Header = () => {
  return (
    <Navbar bg="Light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">CheckThisClothes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/camperas">Camperas</Nav.Link>
            <Nav.Link as={Link} to="/remeras">Remeras</Nav.Link>
            <Nav.Link as={Link} to="/buzos">Buzos</Nav.Link>
            <Nav.Link as={Link} to="/pantalones">
              Pantalones
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default Header;
