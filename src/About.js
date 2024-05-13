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
        <div className="flex flex-col items-center transition-opacity shadow-2xl p-4 rounded-xl md:w-1/2 lg:w-1/3 overflow-scroll h-64 bg-white bg-opacity-50">
          <p>
            Hi, I'm Nicole – a healthcare professional turned software engineer.
            My transition from healthcare to technology is fueled by a passion
            for innovation and a commitment to making meaningful impacts through
            software solutions.
          </p>
          <br></br>
          <p>
            As a{" "}
            <strong className="underline decoration-sky-500">
              full-stack software engineer
            </strong>
            , I specialize in designing user-friendly frontends and robust
            backend systems. My technical toolkit is extensive, including
            advanced skills in{" "}
            <strong className="underline decoration-pink-500">
              JavaScript, TypeScript, React, Next.js, and Nest.js
            </strong>
            . I also have experience working with and designing the database
            schemas of
            <strong> SQL </strong>and <strong> NoSQL databases</strong>.
          </p>
          <br></br>
          <p>
            My goal is to continue to work in environments that challenge me to
            grow. I am always eager to learn new technologies and methodologies
            to more effectively contribute to meaningful projects.
          </p>
          <br></br>
          <div
            className="mt-auto mb-4 cursor-pointer hover:text-red-400 text-2xl"
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
          <span className="font-serif text-xl px-4 cursor-pointer hover:bg-inherit bg-cyan-700 text-white shadow-lg p-3 rounded-2xl hover:shadow-none bg-left-bottom bg-gradient-to-r  from-cyan-800 to-cyan-200 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out hover:text-black">
            About Me
          </span>
        </div>
      )}
    </div>
  );
};

export default About;
