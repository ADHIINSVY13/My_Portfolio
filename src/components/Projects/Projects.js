import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import speek from "../../Assets/Projects/speek.png";
import musicverse from "../../Assets/Projects/musicverse.png";
import dhakate from "../../Assets/Projects/dhakate.png";
import toolnest from "../../Assets/Projects/toolnest.png";

const projects = [
  {
    imgPath: speek,
    title: "SPEEK Interpreter",
    description:
      "SPEEK is a custom programming language and interpreter built in Java, with a browser-based IDE for writing and executing SPEEK programs.",
    ghLink: "https://github.com/ADHIINSVY13/speek-interpreter",
    demoLink: "https://speek-interpreter-seven.vercel.app",
  },
  {
    imgPath: musicverse,
    title: "MusicVerse",
    description:
      "A responsive lyrics-search interface featuring multiple navigation bars, smooth UI transitions, and an interactive guitar element.",
    ghLink: "https://github.com/ADHIINSVY13/MusicVerse",
    demoLink: "https://push-vm51.onrender.com/",
  },
  {
    imgPath: dhakate,
    title: "Dhakate Physiotherapy & Neuro Rehab Center",
    description:
      "A website for a neuro rehabilitation center in Bhopal, with treatments, gallery, testimonials, FAQ, contact details and an appointment booking button.",
    demoLink: "https://dhakatephysio.in/",
  },
  {
    imgPath: toolnest,
    title: "ToolNest",
    description:
      "A hub of handy tools and fun games in one place: calculator, unit converter, password generator, stopwatch and timer, word counter, QR code generator, BMI calculator, Tic Tac Toe, Rock Paper Scissors, Number Guess and Memory Match. Built with HTML, CSS and JavaScript.",
    ghLink: "https://github.com/ADHIINSVY13/ToolNest",
    demoLink: "https://adhiinsvy13.github.io/ToolNest/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
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
