/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';

const AboutMe = () => {
  return (
    <>
      <main className='bg-lightblue min-h-screen flex flex-col'>
        <p className='text-6xl lg:text-7xl text-darkbrown font-serif-display text-center '>
            About Me
        </p>
        <div className='px-24 mt-10'>
          <p className='text-xl lg:text-2xl text-darkbrown font-roboto text-justify'>
            Hi, I'm Sarah Ramirez! I recently graduated with my Bachelors in Science in
            Computer Science with Business Applications. I am thrilled to be starting my
            Master's in Computer Science at the Univeresity of California, Riverside. Alongside 
            my academic pursuits, I enjoy trying new foods, exploring new places, and reading 
            new books. I have a strong passion for innovation and problem-solving, I'm 
            excited to apply my skills and knowledge to meaningful projects. I can't wait 
            to see what opportunities come my way as I embark on my journey as a computer 
            science graduate student.
          </p>
        </div>
      </main>
    </>
  );
};

export default AboutMe;
