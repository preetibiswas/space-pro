import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import colorShap2 from "../assets/img/color-sharp2.png";
import proImg1 from "../assets/img/project-img1.png";
import proImg2 from "../assets/img/project-img2.png";
import proImg3 from "../assets/img/project-img3.png";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const project = [
    {
      title: "business Startup",
      description: "Design & Development",
      imgUrl: proImg1,
    },
    {
        title: "business Startup",
        description: "Design & Development",
        imgUrl: proImg1,
      },
      {
        title: "business Startup",
        description: "Design & Development",
        imgUrl: proImg2,
      },
      {
        title: "business Startup",
        description: "Design & Development",
        imgUrl: proImg3,
      },
      {
        title: "business Startup",
        description: "Design & Development",
        imgUrl: proImg1
      },
      {
        title: "business Startup",
        description: "Design & Development",
        imgUrl: proImg2,
      },
  ];
  return <section className="project" id="project">
    <Container>
        <Row>
            <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere corrupti commodi dolore illo iure nesciunt eos, voluptatum numquam, sint quas voluptas, temporibus vel ipsa. Blanditiis ducimus quos est quidem excepturi.</p>
          
            <Tab.Container id="projects-tabs" defaultActiveKey='first'>
            <Nav variant="pills"
            defaultActiveKey='first'

            className="nav-pills mb-5 justify-content align-item-center" id="pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Third">Tab 3</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey='first'>
                <Row>
                    {project.map((pro,ind)=>{
                        return (
                            <ProjectCard key={ind} {...pro}/>
                        )
                    })}

                </Row>

            </Tab.Pane>
          </Tab.Content>

            </Tab.Container>
            </Col>
        </Row>
        {/* <img src={colorShap2} alt="img" className="'background-image-right" /> */}
    </Container>
   
  </section>;
};

export default Project;
