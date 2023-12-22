import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";
import { TypeAnimation } from "react-type-animation";
import "animate.css";
import TrackVisibility from 'react-on-screen';

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Hi i am Preeti WebDeveloper",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Hi i am Preeti Web Designer",
        1500,
        "Hi i am Preeti UI/UX designer",
        1000,
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
  );
};

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline animate__animated animate__backInLeft animate__slow	2s animate__infinite	infinite">
              Welcome to my Portfolio
            </span>
            <h1>
            <TrackVisibility>
            {({ isVisible }) => isVisible && <ExampleComponent />}
        </TrackVisibility>
              {/* <ExampleComponent />{" "} */}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              recusandae unde dolorum officiis repellendus vel. Dignissimos
              labore facere perspiciatis, quae ullam, nemo consectetur minima,
              sapiente inventore temporibus praesentium quidem provident.
            </p>
            <button onClick={() => console.log("hello")}>
              Lets connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderImg} alt="header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
