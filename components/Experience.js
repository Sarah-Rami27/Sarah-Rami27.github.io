import React from "react";
import experiences from "./data/experiences";
import { Row, Col } from "react-bootstrap";

const Experience = () => {
  return (
    <main className="bg-lightblue min-h-screen flex flex-col items-center justify-center">
      <div className="px-20 mb-8">
        <p className="text-6xl lg:text-7xl pb-24 text-darkbrown font-serif-display text-center">
          Experience
        </p>
        <Row>
          {experiences.map((experiences, index) => {
            const evenIndex = index % 2 == 0;
            const colSize = evenIndex ? 6 : 6;
            return (
              <Col xl={colSize} key={index} className="">
                <div className="flex justify-between">
                  <div className="text-xl">
                    <p className="m-0 text-3xl font-semibold font-roboto ">
                      {experiences.organization}
                    </p>
                    <p className="m-0 font-roboto">{experiences.role}</p>
                    <p className="m-0 text-sm text-left font-roboto">
                      {experiences.duration}
                      <br />
                      {experiences.location}
                    </p>
                    <ul className="list-disc">
                      {experiences.description.map((description, index) => (
                        <li className=" text-md font-roboto" key={index}>
                          {description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </main>
  );
};

export default Experience;
