/* eslint-disable max-len */
import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

const Landing = () => {
  return (
    <>
      <main className='bg-lightblue'>
        <Container className='p-8'>
          <Row className='place-content-center'>
            <Col className='justify-center my-auto' xs={12} md={7} lg={8}>
              <p className='text-6xl lg:text-9xl text-darkbrown font-serif-display md:text-left '>
                Sarah <br></br>Ramirez
              </p>
              <p className='text-2xl md:text-3xl text-darkbrownfont-roboto md:text-left'>
                Computer Science Graduate Student
              </p>
            </Col>
            <Col xs={7} sm={5} md={5} lg={4}>
              <img className="my-12 shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="sarahpic.jpg" alt='Sarah Ramirez Picture' />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Landing;
