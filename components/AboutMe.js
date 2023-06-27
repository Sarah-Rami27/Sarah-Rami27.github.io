/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

const AboutMe = () => {
  return (
    <>
      <div className='bg-lightblue min-h-screen flex flex-col' >
        <p className='mt-10 text-6xl lg:text-7xl text-darkbrown font-serif-display text-center '>
            About Me
        </p>
        <div className='px-24 mt-10'>
          <p className='text-xl lg:text-2xl text-darkbrown font-roboto text-justify'>
            Hi, I'm Sarah Ramirez! I recently graduated with my Bachelors in Science in
            Computer Science with Business Applications. I am thrilled to be starting my
            Master's in Computer Science at the Univeresity of California, Riverside. Alongside
            my academic pursuits, I enjoy trying new foods, exploring new places, and reading
            new books. I thrive on solving complex problems and creating innovative solutions
            that can make a positive impact in the world. Through my education and hands-on
            experience, I have developed a solid foundation in various programming languages,
            algorithms, and data structures. I can't wait
            to see what opportunities come my way as I embark on my journey as a computer
            science graduate student.
          </p>
        </div>
        <div className='mt-10 flex flex-col px-24'>
          <Row>
            <Col md={12} lg={8}>
              <div >
                <p className='text-5xl text-darkbrown font-serif-display'>
                Education
                </p>
              </div>
              <div className='mt-6 mr-6'>
                <ul>
                  <li className='text-lg font-roboto font-bold leading-tight'>
                    2023
                  </li>
                  <li className='leading-tight text-gray font-roboto'>
                   University of California Riverside
                  </li>
                  <li className='text-lg font-roboto'>
                    Bachelors of Science in Computer Science with Business Applications
                  </li>
                </ul>

              </div>
              <div className='mt-8 mr-6'>
                <p className='text-2xl font-serif-display leading-tight'>
                  &nbsp; Revelvant Coursework
                </p>
                <ul>
                  <li className='leading-tight font-roboto text-justify'>
                    Discrete Structues, Computer Networks, Intermediate Data Structures and Algorithms,
                    Design of Operating Systems, Computer Security, Introduction to Information Retrieval, Data Analysis Methods,
                    Database Management Systems, Software Construction, Technical Communications, Production
                    and Operations Management, Simulation for Business, Marketing and Distribution Management
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div>
                <p className='text-5xl text-darkbrown font-serif-display'>
                  Skills
                </p>
              </div>
              <div className='mt-6'>
                <p className='text-lg font-bold font-roboto leading-tight'>
                  Technical Skills:
                </p>
                <p className='font-roboto text-justify'>
                  C++, Javascript, Python, HTML/CSS, SQL
                </p>
              </div>
              <div className='mt-6'>
                <p className='text-lg font-bold font-roboto leading-tight'>
                  Frameworks:
                </p>
                <p className='font-roboto'>
                   React, Next.js, Tailwind CSS
                </p>
              </div>
              <div className='mt-6'>
                <p className='text-lg font-bold font-roboto leading-tight'>
                  Development Tools:
                </p>
                <p className='font-roboto'>
                  Git/Github, CMake, Visual Studio Code
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
