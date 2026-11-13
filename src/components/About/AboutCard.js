import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Divyanshi Sahu</span>{" "}
            from <span className="purple">Bhopal, India</span>.
            <br />
             <br />
            I am a passionate <span className="purple">Software Engineer </span> with a strong interest in building innovative and efficient software solutions. I enjoy exploring new technologies, solving complex problems, and continuously learning to enhance my skills.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Music Exploration 🎧
            </li>
            <li className="about-activity">
              <ImPointRight /> Memory Collector 📸
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building beyond the Ordinary!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
