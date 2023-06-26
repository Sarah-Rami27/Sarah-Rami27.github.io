import React from 'react';
import Landing from '../components/Landing';
import Navigation from '../components/Navigation';
import AboutMe from '../components/AboutMe';


const Index = () => {
  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <Landing />
      <AboutMe/>
    </div>
  );
};

export default Index;
