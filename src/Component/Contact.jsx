import React, { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  const formInitialData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(formInitialData);
  const [buttonText,setButtonText]=useState('send')
  const onFormUpdate = (category, value) => {
    setFormData({
      ...formData,
      [category]: value,
    });
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form action="">
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    placeholder="First Name"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => onFormUpdate("firstname", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    placeholder="last Name"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    placeholder="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => onFormUpdate("Email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    placeholder="phone no"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col px-1>
                  <textarea
                    value={formData.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    rows="6"
                    cols='6'
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
