import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import About from "../components/Home/About";
import Type from "../components/Home/Type";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* <h1 className="heading-name">
                <strong className="main-name">
                  {" "}
                  MAVZU:Xavfsizlik buzilganini aniqlovchi dasturlar
                </strong>
              </h1> */}

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src="https://avatars.mds.yandex.net/i?id=c125f7e73973b8933a5f01e5ac2dfb73b600b4c2-8527116-images-thumbs&n=13"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "550px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
};

export default Home;
