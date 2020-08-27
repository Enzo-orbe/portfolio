import React from "react";
import "./Contacto.css";
import { Link } from "react-scroll";
import { Container, Col, Row } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

export default function Contacto() {
  return (
    <Container id="contactos" className="contacto" fluid>
      <Row md>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Contactame</h2>
        </Col>
      </Row>
      <Row md>
        <Col md={{ span: 6, offset: 3 }}>
          <a
            className="contacto"
            href="https://www.facebook.com/aguantelaindu/"
          >
            <FacebookIcon style={{ fontSize: 80 }}></FacebookIcon>
          </a>

          <a
            className="contacto"
            href="https://www.instagram.com/enzoorbe/?hl=es-la"
          >
            <InstagramIcon style={{ fontSize: 75 }}></InstagramIcon>
          </a>

          <a className="contacto" href="mailto:enzoorbe1998@gmail.com">
            <EmailIcon style={{ fontSize: 80 }}></EmailIcon>
          </a>
        </Col>
        <Col md={{ span: 3, offset: 3 }} className="ml-auto">
          <Link to="nav" smooth={true} duration={1000}>
            <ArrowUpwardIcon
              className="flecha"
              style={{ fontSize: 60 }}
            ></ArrowUpwardIcon>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
