import React from "react";
import Landing from "../components/Landing";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";

const Index = () => {
  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <Landing />
      <AboutMe />
      <Experience />
    </div>
  );
};

export default Index;
