import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            hello,world  I am <span className="purple">ARYA , ARMADE </span>
            from <span className="purple"> iran</span>
            <br />
            I am currently front end developer right now.
            <br />
            I have completed <span className="purple">cs50w ,cs50p, IELTS.</span>
            <br />
            <br />
            after coding i like to...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Game
            </li>
            <li className="about-activity">
              <ImPointRight /> learning pc
            </li>
            <li className="about-activity">
              <ImPointRight /> watch anime
            </li>
          </ul>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
