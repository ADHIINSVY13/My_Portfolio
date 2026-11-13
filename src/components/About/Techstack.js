import React from "react";
import { Col, Row } from "react-bootstrap";
import PHP from "../../Assets/TechIcons/PHP.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Flask from "../../Assets/TechIcons/Flask.svg";
import Figma from "../../Assets/TechIcons/Figma.svg";
import Flourish from "../../Assets/TechIcons/Flourish.svg";
import Pandas from "../../Assets/TechIcons/Pandas.svg";
import NumPy from "../../Assets/TechIcons/NumPy.svg";
import Matplotlib from "../../Assets/TechIcons/Matplotlib.svg";
import BeautifulSoup from "../../Assets/TechIcons/BeautifulSoup.svg";
import Selenium from "../../Assets/TechIcons/Selenium.svg";
import PyTorch from "../../Assets/TechIcons/PyTorch.svg";
import ScikitLearn from "../../Assets/TechIcons/ScikitLearn.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PHP} alt="PHP" className="tech-icon-images" />
        <div className="tech-icons-text">PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kubernates} alt="kubernetes" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">Postgresql</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="haskell" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      {/* Flask */}
<Col xs={4} md={2} className="tech-icons">
  <img src={Flask} alt="Flask" className="tech-icon-images" />
  <div className="tech-icons-text">Flask</div>
</Col>

{/* Figma */}
<Col xs={4} md={2} className="tech-icons">
  <img src={Figma} alt="Figma" className="tech-icon-images" />
  <div className="tech-icons-text">Figma</div>
</Col>

{/* Flourish */}
<Col xs={4} md={2} className="tech-icons">
  <img src={Flourish} alt="Flourish" className="tech-icon-images" />
  <div className="tech-icons-text">Flourish</div>
</Col>

{/* Pandas */}
<Col xs={4} md={2} className="tech-icons">
  <img src={Pandas} alt="Pandas" className="tech-icon-images" />
  <div className="tech-icons-text">Pandas</div>
</Col>

{/* NumPy */}
<Col xs={4} md={2} className="tech-icons">
  <img src={NumPy} alt="NumPy" className="tech-icon-images" />
  <div className="tech-icons-text">NumPy</div>
</Col>

{/* Matplotlib */}
<Col xs={4} md={2} className="tech-icons">
  <img src={Matplotlib} alt="Matplotlib" className="tech-icon-images" />
  <div className="tech-icons-text">Matplotlib</div>
</Col>

{/* BeautifulSoup */}
<Col xs={4} md={2} className="tech-icons">
  <img src={BeautifulSoup} alt="BeautifulSoup" className="tech-icon-images" />
  <div className="tech-icons-text">BeautifulSoup</div>
</Col>

{/* Selenium */}
<Col xs={4} md={2} className="tech-icons">
  <img src={Selenium} alt="Selenium" className="tech-icon-images" />
  <div className="tech-icons-text">Selenium</div>
</Col>

{/* PyTorch */}
<Col xs={4} md={2} className="tech-icons">
  <img src={PyTorch} alt="PyTorch" className="tech-icon-images" />
  <div className="tech-icons-text">PyTorch</div>
</Col>

{/* Scikit-learn */}
<Col xs={4} md={2} className="tech-icons">
  <img src={ScikitLearn} alt="Scikit-learn" className="tech-icon-images" />
  <div className="tech-icons-text">Scikit-learn</div>
</Col>
    </Row>
  );
}

export default Techstack;
