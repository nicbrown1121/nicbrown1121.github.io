import React, { useState } from "react";
import "./index.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  console.log({ isVisible });

  const handleClose = () => {
    setIsVisible(!isVisible);
  };

  const handleShow = () => {
    setIsVisible(true);
  };

  return (
    <div className="justify-center mt-4 text-center flex">
      {isVisible ? (
        <div className="shadow-2xl p-2 rounded-xl w-96 overflow-hidden transition-height h-96 ease-in-out duration-500">
          Hi, I'm Nicole.
          <div className="border-4">
            <button
              className="text-black border-4 rounded-2xl"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div
          className="group transition-all duration-300 ease-in-out"
          onClick={handleShow}
        >
          <span className="font-serif text-lg cursor-pointer bg-left-bottom bg-gradient-to-r  from-cyan-800 to-cyan-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About Me
          </span>
        </div>
      )}
    </div>
  );
};

export default About;
