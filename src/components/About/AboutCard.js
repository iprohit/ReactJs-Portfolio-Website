import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Rohit Ippalpalli </span>
            from{" "}
            <span className="purple">Solapur, Maharashtra, India.</span>
            <br />
            <br />
            I am a Software Developer with experience in building and deploying 
            scalable applications using modern cloud and DevOps practices.
            <br />
            <br />
            I have worked as a Software Developer at SPW Healthcare Innovations, 
            where I contributed to developing and deploying applications using 
            AWS, CI/CD pipelines, Docker, and Jenkins.
            <br />
            <br />
            I also have prior experience as an Associate Support Engineer at Quick Heal, 
            which helped me build a strong foundation in troubleshooting and system reliability.
            <br />
            <br />
            My core skills include AWS (EC2, S3), CI/CD, Docker, Jenkins, Linux, 
            Spring Boot, React, Python, MySQL, and MongoDB.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building cloud & DevOps projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AWS & automation tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build scalable systems that make a real impact!"
          </p>
          <footer className="blockquote-footer">Rohit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;