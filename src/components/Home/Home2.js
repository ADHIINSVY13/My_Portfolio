import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer who loves transforming ideas into
              reliable, scalable products. I enjoy exploring new technologies,
              solving challenging problems, and building projects that combine creativity with functionality.
              <br />
              <br />I'm proficient in <i><b className="purple">Java and Python</b></i>, with hands-on experience in <i>
              <b className="purple">JavaScript, C, HTML, CSS, Tailwind CSS, Bootstrap and React.js</b></i>. 
              <br />
              <br />
              My toolkit also includes <i>
                <b className="purple">Flask, NumPy, Pandas, Scikit-learn, Matplotlib, BeautifulSoup, Selenium and SQL</b></i>, along with <i>
                  <b className="purple">Git, GitHub, Linux, and Docker</b></i> for development and version control.

<br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
           
              <img src={myImg} className="img-fluid" alt="avatar" />
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
