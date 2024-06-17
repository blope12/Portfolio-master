import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        how much i <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="blope12"
        blockSize={25}
        blockMargin={8}
        color="#24c3df"
        fontSize={26}
      />
    </Row>
  );
}

export default Github;
