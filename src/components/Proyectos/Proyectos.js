import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import "./Proyectos.css";

function Proyectos() {
  const [projects, setProjects] = useState({});
  useEffect(() => {
    axios
      .get("https://backendport.herokuapp.com/portfolio")
      .then((res) => setProjects(res.data));
  }, [setProjects]);
  return (
    <Container id="proyectos" className="cards" fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="titulo">
            <h1>Proyectos</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={6}>
          <CardDeck>
            {projects.length > 0 &&
              projects.map((project, index) => (
                <Card
                  className="individual-card"
                  border="dark"
                  style={{ width: "18rem" }}
                  key={index}
                >
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Img
                    variant="top"
                    className="imagen-proyecto"
                    alt="imagen-proyecto"
                    src={project.image}
                  />
                  <Card.Body>
                    <Card.Text className="descripcion">
                      {project.description}
                    </Card.Text>
                    <Button className="button" href={project.Link}>
                      Visitar Proyecto
                    </Button>
                  </Card.Body>
                </Card>
              ))}
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
}

export default Proyectos;
