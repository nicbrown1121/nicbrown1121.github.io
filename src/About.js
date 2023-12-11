import React, { useState } from "react";
import "./index.css";
import { IoMdCloseCircle } from "react-icons/io";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  //ToggleKey state will force React to remount  and reset scroll position on About Me
  const [toggleKey, setToggleKey] = useState(0);

  const handleClose = () => {
    setIsVisible(!isVisible);
    setToggleKey((prevKey) => prevKey + 1);
  };

  const handleShow = () => {
    setIsVisible(true);
    setToggleKey((prevKey) => prevKey + 1);
  };

  return (
    <div
      key={toggleKey}
      className="flex flex-col items-center justify-center mt-4 text-center"
    >
      {isVisible ? (
        <div className="flex flex-col items-center shadow-2xl p-3 rounded-xl md:w-1/2 lg:w-1/3 overflow-scroll h-64 bg-white bg-opacity-50">
          <p>
            Hi, I'm Nicole – a healthcare professional turned passionate
            software engineer. With a background in healthcare, I bring a unique
            perspective to the world of technology.
          </p>
          <br></br>
          <p>
            I have experience in{" "}
            <strong className="underline decoration-sky-500">
              full-stack web development
            </strong>{" "}
            with a focus on{" "}
            <strong className="underline decoration-pink-500">
              front-end technologies
            </strong>{" "}
            and passion for design. My professional journey has allowed me to
            work collaboratively with diverse teams to design and create
            user-friendly applications, all the way from conceptualization to
            deployment!
          </p>
          <br></br>
          <p>
            My journey in software engineering is fueled by a love for learning
            and a commitment to continuous improvement. Each project is an
            opportunity to explore new technologies, refine my skills, and
            contribute to innovative solutions.
          </p>
          <br></br>
          <div
            className="mt-auto mb-4 cursor-pointer hover:text-red-300"
            onClick={handleClose}
          >
            <IoMdCloseCircle />
          </div>
        </div>
      ) : (
        <div
          className="group transition-all duration-300 ease-in-out"
          onClick={handleShow}
        >
          <span className="font-serif text-xl cursor-pointer bg-left-bottom bg-gradient-to-r  from-cyan-800 to-cyan-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            About Me
          </span>
        </div>
      )}
    </div>
  );
};

export default About;
