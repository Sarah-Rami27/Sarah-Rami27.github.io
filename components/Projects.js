import React from "react";
import { Row, Col } from "react-bootstrap";
import project from "./data/project";
import {
  FaGithub,
  FaInfoCircle,
  FaExternalLinkSquareAlt,
} from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects">
      <main className="bg-lightblue min-h-screen py-20 flex flex-col items-center ">
        <div className="px-20 mb-8">
          <p className="text-6xl lg:text-7xl mb-16 text-darkbrown font-serif-display text-center">
            Projects
          </p>
          <Row className="flex justify-content-center">
            {project.map((project, index) => {
              return (
                <Col
                  xl={4}
                  lg={6}
                  key={index}
                  className="p-3 flex flex-col items-center"
                >
                  <div className="p-6 flex flex-col justify-center items-center bg-textbox">
                    <p className="m-2 text-3xl text-center font-roboto">
                      {project.title}{" "}
                    </p>
                    <p className="m-0 text-lg text-center font-bold font-roboto">
                      {project.technologies}
                    </p>
                    <p className="m-0 text-md text-center font-roboto">
                      {project.description}
                    </p>
                    <div className="flex m-2 justify-center">
                      <a
                        href={project.github}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaGithub className="m-2 hover:text-gray text-darkbrown text-4xl" />
                      </a>
                      {project.website == "" ? (
                        <></>
                      ) : (
                        <a
                          href={project.website}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <FaExternalLinkSquareAlt className="m-2 hover:text-gray text-darkbrown text-4xl" />
                        </a>
                      )}
                      {project.info == "" ? (
                        <></>
                      ) : (
                        <a
                          href={project.website}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <FaInfoCircle className="m-2 hover:text-gray text-darkbrown text-4xl" />
                        </a>
                      )}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </main>
    </section>
  );
};

export default Projects;
