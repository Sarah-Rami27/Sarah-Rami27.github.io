/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from "react";
import { Row, Col } from "react-bootstrap";

const AboutMe = () => {
  return (
    <section id="aboutme">
      <main className="bg-lightblue min-h-screen py-20 flex flex-col items-center justify-center">
        <div className="px-20 mb-8">
          <p className="text-6xl lg:text-7xl text-darkbrown font-serif-display text-left">
            About Me
          </p>
          <Row className="place-content-center">
            <Col xs={12} lg={9}>
              <p className=" my-6 text-lg lg:text-xl xl:text-2xl text-darkbrown font-roboto text-left">
                Hi, I'm Sarah Ramirez! I graduated with my Bachelors in
                Science in Computer Science with Business Applications at the University of California, Riverside. I am
                currently a Graduate student in Computer Science at the
                University of California, Riverside. Alongside my academic
                pursuits, I enjoy trying new foods, exploring new coffee shops, and
                reading new books. I enjoy solving complex problems and
                creating innovative solutions that can make a positive impact in
                the world. Through my education and hands-on experience, I have
                developed a solid foundation in various programming languages,
                algorithms, and data structures. I can't wait to see what
                opportunities come my way as continue in my educational career.
              </p>
            </Col>
            <Col xs={7} lg={3} className="flex-col">
              <div className="flex items-center justify-center">
                <img
                  className="shadow-xl rounded-lg max-w-full h-auto align-middle border-none"
                  src="belltowergrad.webp"
                  alt="Grad picture"
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="flex flex-col px-10">
          <Row>
            <Col md={12} lg={8}>
              <div>
                <p className="text-5xl text-darkbrown font-serif-display">
                  Education
                </p>
              </div>
              <div className="mt-6 mr-6">
                <ul>
                  <li className="text-lg font-roboto font-bold leading-tight">
                    2023
                  </li>
                  <li className="leading-tight text-gray font-roboto">
                    University of California Riverside
                  </li>
                  <li className="text-lg font-roboto">
                    Bachelors of Science in Computer Science with Business
                    Applications
                  </li>
                </ul>
              </div>
              <div className="mt-8 mr-6">
                <p className="text-2xl font-roboto font-semibold leading-tight">
                  &emsp; Revelvant Coursework
                </p>
                <ul>
                  <li className="text-lg font-bold leading-tight font-roboto text-left">
                    Computer Science & Engineering:
                  </li>
                  <li className=" font-roboto leading-tight ">
                      Advanced Computer Architecture
                      &#x2022; Advanced Operating Systems
                      &#x2022; Data Structures and Algorithms (including Design and Analysis of Algorithms)
                      &#x2022; Discrete Structures
                      &#x2022; Software Construction
                      &#x2022; Computer Security
                      &#x2022; Database Management Systems
                      &#x2022; Computational Methods for Biomolecular Data
                  </li>
                  <li className="text-lg font-bold leading-tight font-roboto text-left">
                    Data Science & Artificial Intelligence:
                  </li>
                  <li className="font-roboto leading-tight">
                      Data Mining Techniques
                      &#x2022; Machine Learning
                      &#x2022; Artificial Intelligence
                      &#x2022; Big Data Management
                      &#x2022; Data Analysis Methods
                      &#x2022; Natural Language Processing
                  </li>
                  <li className="text-lg font-bold leading-tight font-roboto text-left">
                    Management & Decision Science:
                  </li>
                  <li className="font-roboto leading-tight">
                      Decision Analysis and Management Science
                      &#x2022; Production and Operations Management
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div>
                <p className="text-5xl text-darkbrown font-serif-display">
                  Skills
                </p>
              </div>
              <div className="mt-6">
                <p className="text-lg font-bold font-roboto leading-tight">
                  Technical Skills:
                </p>
                <p className="font-roboto text-left">
                  C++, Javascript, Python, HTML/CSS, SQL, Pandas, NumPy, Scikit-Learn
                </p>
              </div>
              <div className="mt-6">
                <p className="text-lg font-bold font-roboto leading-tight">
                  Frameworks:
                </p>
                <p className="font-roboto">React, Next.js, Tailwind CSS</p>
              </div>
              <div className="mt-6">
                <p className="text-lg font-bold font-roboto leading-tight">
                  Development Tools:
                </p>
                <p className="font-roboto">
                  Git/Github, CMake, Visual Studio Code
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </section>
  );
};

export default AboutMe;
