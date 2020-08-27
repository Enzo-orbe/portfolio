import React from "react";
import { Navbar } from "react-bootstrap";
import "./Nacegacion.css";
import { Link } from "react-scroll";

const Navegacion = () => {
  return (
    <Navbar
      id="nav"
      className="navegacion"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="/">
        <h1>Enzo Orbe</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav " />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Navbar className="ml-auto">
          <ul className="lista">
            <li>
              <Link
                className="nav-link"
                to="proyectos"
                smooth={true}
                duration={1000}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="contactos"
                smooth={true}
                duration={1000}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
