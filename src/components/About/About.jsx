import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import homeLogo from "../../Assets/user.svg";
import Toolstack from "./Toolstack";
import List from "./List";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", padding: "10px" }}
          className="align-items-center"
        >
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
            className="about-img"
          >
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px", marginBottom: "10%" }}
            />
          </Col>
        </Row>
        <List/>
        <Techstack />
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default About;
