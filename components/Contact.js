/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <Row className=" px-8 py-12 mx-auto rounded-lg md:px-12 lg:px-16 xl:px-32 ">
        <Col className="flex flex-col justify-between">
          <div className="space-y-2">
            <p className="text-4xl font-bold font-serif-display text-darkbrown text-center leadi lg:text-5xl">
              Let's Connect!
            </p>
            <div className="text-darkbrown font-roboto text-center text-lg">
              I'd love to hear from you!
            </div>
          </div>
          <div className="flex justify-center p-4">
            <a
              href="https://github.com/Sarah-Rami27"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub className="m-2 hover:text-gray text-darkbrown text-5xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/sarah-ramirez-2023/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin className="m-2 hover:text-gray text-darkbrown text-5xl" />
            </a>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
