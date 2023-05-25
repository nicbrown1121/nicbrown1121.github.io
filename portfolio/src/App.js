// import { useClient } from "react-server-dom";
import React, { useState } from "react";
import { IoNewspaperSharp } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { RiMentalHealthFill } from "react-icons/ri";
// import pinLogo from "../../public/pinLogo";

const Home = () => {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <div>
        <title>Nicole Brown Portfolio</title>
        <meta name="description"></meta>
      </div>
      <main className="bg-gray-200">
        <section className="min-h-100">
          <nav className="py-5 mb-12">
            <h1 className="text-xl font-serif">{/* Developed by Nicole */}</h1>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Nicole Brown
            </h2>
            <h3 className="text-2xl py-2">Front End Software Engineer</h3>
            {/* <p className="text-md py-5 leading-8 text-grey-800">Front End Engin</p> */}
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
        <h3 className="text-3xl text-center py-20 inset-x-0 bottom-0 h-16 text-teal-700">
          Projects
        </h3>
        <div className="justify-center lg:flex gap-10 center md:flex ">
          <section className="text-center shadow-2xl p-10 rounded-xl my-10">
            <div className="grid place-items-center">
              {/* CENTER IMAGE */}
              <a href="https://projectinnovatenewark.org">
                <img alt="" src="/pin_logo.png" width={200} height={100} />
              </a>
              <h3 className="text-3xl py-8"> Project Innovate Newark</h3>
              <p className="text-md py-4 leading-8 text-gray-800">
                SHOULD I PUT A SUMMARY
              </p>
            </div>
          </section>
          <section className="text-center shadow-2xl p-10 py-10 rounded-xl my-10">
            <div>
              <div className="py-10 text-5xl grid place-items-center">
                <RiMentalHealthFill className="place-items-center" />
              </div>
              <div>
                <h3 className="text-3xl py-1"> Patient Portal App</h3>
                <p className="text-md py-8 leading-8 text-gray-800">
                  React App with Flask and Postgres SQL
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
