import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <DiIllustrator />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>

    </Row>
  );
}

export default Toolstack;
