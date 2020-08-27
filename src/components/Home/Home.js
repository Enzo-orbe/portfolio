import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
  const [information, setInformation] = useState({});
  useEffect(() => {
    axios
      .get("https://backendport.herokuapp.com/about")
      .then((res) => setInformation(res.data[0]));
  }, [setInformation]);

  return (
    <Container fluid id="home" className="About">
      <Row md>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="div-foto">
            <img
              className="foto-perfil"
              src={information.photo}
              alt="FotoPerfil"
            />
          </div>
        </Col>
      </Row>
      <Row md>
        <Col md={{ span: 6, offset: 3 }}>
          <div className="descripciones">
            <h1 className="name">{information.name} </h1>
            <h2>{information.profession} </h2>
            <p>{information.about_me}</p>
          </div>
        </Col>
      </Row>
      <Row md>
        <Col md={12}>
          <ul className="skills">
            {information.skills &&
              information.skills.map((skill, index) => (
                <p className="skill" key={index}>
                  {skill}
                </p>
              ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
