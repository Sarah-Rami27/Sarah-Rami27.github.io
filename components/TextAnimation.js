import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TextAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["^30 Hello, I'm"],
      typeSpeed: 120,
      loop: false,
      showCursor: false,
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span ref={textRef} className="font-brittany text-5xl lg:text-7xl m-6" />
  );
};

export default TextAnimation;
