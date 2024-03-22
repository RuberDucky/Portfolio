import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zain Ul Abdeen </span>
            from <span className="purple"> Punjab, Pakistan.</span>
            <br />
            I am currently employed as a software developer at Akodes.
            <br />
            I have completed Graduation (BS) in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Qirat E Quran
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Zain</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
