import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg" collapseOnSelect fixed="top" className="bg-lightblue">
      <Navbar.Brand href="#home">
        <p className="text-darkbrown text-2xl hover:!text-white font-serif-display ml-8">
          S.R.
        </p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            href="#aboutme"
            className="font-serif-display text-xl !text-darkbrown hover:!text-white"
          >
            About Me
          </Nav.Link>
          <Nav.Link
            href="#experience"
            className="font-serif-display text-xl !text-darkbrown hover:!text-white"
          >
            Experience
          </Nav.Link>
          <Nav.Link
            href="#projects"
            className="font-serif-display text-xl !text-darkbrown hover:!text-white"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href="#contact"
            className="font-serif-display text-xl !text-darkbrown hover:!text-white"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
