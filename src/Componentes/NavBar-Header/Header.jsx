import "./Header.css";
import CartWidget from "../CarWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// El archivo css esta vacio porque esta utilizando estilos de boostrap.

const Header = () => {
  return (
    <Navbar bg="Light" expand="lg">
      <Container >
        <Navbar.Brand href="#home">ElevaShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Remeras</Nav.Link>
            <Nav.Link href="#link">Buzos</Nav.Link>
            <Nav.Link href="#link">Camperas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default Header;
