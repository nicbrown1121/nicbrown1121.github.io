import React, { useState } from "react";
import { IoNewspaperSharp } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { RiMentalHealthFill } from "react-icons/ri";
import Card from "./Card";

const Home = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div>
      <div>
        <title>Nicole Brown Portfolio</title>
        <meta name="description"></meta>
      </div>
      <main className="bg-gray-100">
        {/* NAME AND RESUME SECTION */}
        <section className="min-h-100">
          <nav className="py-5 mb-12">
            <h1 className="text-xl font-serif">{/* Developed by Nicole */}</h1>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Nicole Brown
            </h2>
            <h3 className="text-2xl py-2">Front End Software Engineer</h3>
          </div>
          <div className="text-3xl flex justify-center  text-gray-600">
            <AiFillLinkedin />
            <li>
              {/* LINK TO RESUME */}
              <a
                className=" bg-gradient-to-r from-teal-400 to-teal-800 text-white  px-4 py-2 rounded-md"
                href=""
              >
                Resume
              </a>
            </li>
          </div>
        </section>
        {/* PROJECT SECTION */}
        <h3 className="text-3xl text-center py-20 \ inset-x-0 bottom-0 h-16 text-teal-700">
          Projects
        </h3>
        <div className="justify-center lg:flex gap-10 center md:flex ">
          <Card />
        </div>
      </main>
    </div>
  );
};

export default Home;
