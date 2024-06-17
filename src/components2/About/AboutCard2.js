import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            hello,world  I am <span className="purple">KASRA , SAFARALI </span>
            from <span className="purple"> Iran</span>
            <br />
            i`m currently graphic designer but i do something else
            <br />

          </p>
\


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
