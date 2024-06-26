import React from "react";
import { Button, Nav } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";

function ButtonGithub() {
  return (
    <Nav.Item className="fork-btn">
      <Button
        href="https://github.com/eduardoe92"
        target="_blank"
        className="fork-btn-inner"
      >
        <span className="sr-only">Github</span>
        <CgGitFork style={{ fontSize: "1.2em" }} />
        <AiFillStar style={{ fontSize: "1.2em" }} />
      </Button>
    </Nav.Item>
  );
}

export default ButtonGithub;
