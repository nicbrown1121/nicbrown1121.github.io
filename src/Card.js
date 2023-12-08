import React from "react";
import { RiMentalHealthFill } from "react-icons/ri";
import { HiCursorClick } from "react-icons/hi";

const Card = () => {
  return (
    <>
      <div className="PINCard shadow-2xl rounded-xl p-4 h-40 w-96 opacity-75 hover:opacity-100 hover:bg-cyan-100 hover:h-96 duration-300 overflow-hidden">
        <section className="card-section">
          <div className="justify-center text-center lg:flex gap-10 center md:flex grid place-items-center">
            <img alt="" src="/pin_logo.png" width={200} height={100} />
          </div>
          <div>
            <h3 className="text-3xl text-center font-serif py-4">
              Project Innovate Newark
            </h3>
            <p className="font-bold text-center">Technologies:</p>
            <div className="grid grid-cols-2 gap-4 text-md text-center py-4 leading-8 text-gray-800">
              <div>
                <p>React</p>
                <p>Flask</p>
                <p>Postgres</p>
              </div>
              <div>
                <p>Docker</p>
                <p>Kubernetes</p>
                <p>Cassandra</p>
              </div>
            </div>
            <div className="grid place-items-center cursor-pointer">
              <a href="https://www.projectinnovatenewark.org">Visit Website</a>
              <HiCursorClick className="place-content-end" />
            </div>
          </div>
        </section>
      </div>
      <div className="healthCard shadow-2xl p-2 rounded-xl h-40 w-96 opacity-75 hover:opacity-100 hover:bg-cyan-100 hover:h-96 duration-300 overflow-hidden">
        <section className="card-section">
          <div className="justify-center text-center lg:flex gap-10 center md:flex grid place-items-center">
            <div className="py-4 text-5xl grid place-items-center">
              <RiMentalHealthFill className="grid place-items-center" />
            </div>
          </div>
          <h3 className="text-3xl text-center font-serif py-3">
            Patient Portal App
          </h3>
          <div className="text-md py-4 leading-8 text-gray-800 text-center place-items-center">
            <p className="font-bold">Technologies:</p>
            <p>React</p>
            <p>Express</p>
            <p>NextJS</p>
          </div>
          <div className="grid place-items-center cursor-pointer">
            <a href="https://github.com/nicbrown1121/patient_portal">
              Visit GitHub
            </a>
            <HiCursorClick className="place-content-end" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
