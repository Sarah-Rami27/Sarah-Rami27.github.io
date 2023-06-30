import React from "react";
import Landing from "../components/Landing";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <Navigation />
      <Landing />
      <AboutMe />
      <Experience />
    </div>
  );
};

export default Index;
