/* eslint-disable max-len */
import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

const Landing = () => {
  return (
    <>
      <main className='bg-lightblue min-h-screen flex flex-col items-center justify-center'>
        <Container className='p-8'>
          <Row className='place-content-center'>
            <Col className='justify-center my-auto' xs={12} sm={10} md={8} lg={8} >
              <p className='animate__animated animate__fadeInDown text-7xl md:text-8xl lg:text-9xl text-darkbrown font-serif-display sm:text-left text-center'>
                Sarah <br></br>Ramirez
              </p>
              <p className='animate__animated animate__fadeInUp text-2xl md:text-3xl text-darkbrownfont-roboto sm:text-left text-center'>
                Computer Science Graduate Student
              </p>
            </Col>
            <Col xs={8} sm={7} md={6} lg={4}>
              <img className="animate__animated animate__fadeInRight my-8 shadow-xl rounded-full max-w-full h-auto align-middle border-none" src="sarahpic.jpg" alt='Sarah Ramirez Picture' />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Landing;
