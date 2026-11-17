import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import speek from "../../Assets/Projects/speek.png";
import musicverse from "../../Assets/Projects/musicverse.png";
import dhakate from "../../Assets/Projects/dhakate.png";
import toolnest from "../../Assets/Projects/toolnest.png";
import baalkavach from "../../Assets/Projects/baalkavach.png";

const projects = [
  {
    imgPath: baalkavach,
    title: "BaalKavach",
    description:
      "Helps parents know their child is safe on the school bus. It shows when the child boarded, where the bus is and when it will reach their stop, and sends an instant alert if something goes wrong.",
    demoLink: "https://baalkavach.in/",
  },
  {
    imgPath: dhakate,
    title: "Dhakate Physiotherapy & Neuro Rehab Center",
    description:
      "A website for a physiotherapy and neuro rehab center in Bhopal, where patients can read about treatments and book an appointment.",
    demoLink: "https://dhakatephysio.in/",
  },
  {
    imgPath: speek,
    title: "SPEEK Interpreter",
    description:
      "My own programming language, with an online editor where you can write a program and run it right in your browser.",
    ghLink: "https://github.com/ADHIINSVY13/speek-interpreter",
    demoLink: "https://speek-interpreter-seven.vercel.app",
  },
  {
    imgPath: musicverse,
    title: "MusicVerse",
    description:
      "Search for any song by its name and read the lyrics on a clean, easy-to-read page.",
    ghLink: "https://github.com/ADHIINSVY13/MusicVerse",
    demoLink: "https://push-vm51.onrender.com/",
  },
  {
    imgPath: toolnest,
    title: "ToolNest",
    description:
      "A collection of handy tools and fun games in one place, like a calculator, QR code maker, password generator and Tic Tac Toe.",
    ghLink: "https://github.com/ADHIINSVY13/ToolNest",
    demoLink: "https://adhiinsvy13.github.io/ToolNest/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section projects-page">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
