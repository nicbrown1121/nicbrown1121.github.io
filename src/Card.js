import React from "react";
import { RiMentalHealthFill } from "react-icons/ri";
import { HiCursorClick } from "react-icons/hi";
import { IoFitness } from "react-icons/io5";

const Card = () => {
  return (
    <>
      <div className="healthCard shadow-2xl p-2 rounded-xl h-44 w-96 opacity-75 hover:opacity-100 hover:bg-cyan-100 hover:h-96 duration-300 overflow-hidden">
        <section className="card-section">
          <div className="justify-center text-center lg:flex gap-10 center md:flex grid place-items-center">
            <div className="py-4 text-5xl grid place-items-center">
              <IoFitness className="grid place-items-center" />
            </div>
          </div>
          <h3 className="text-3xl text-center font-serif pt-2">
            Health-tech Startup
          </h3>
          <h2 className="text-xl text-center font-serif pb-2">
            Full-Stack Software Engineer
          </h2>
          <div className="text-md py-4 leading-8 text-gray-800 text-center place-items-center">
            <p className="font-bold">Technologies:</p>
            <p>React Native</p>
            <p>NestJS</p>
            <p>DynamoDB</p>
          </div>
          <div className="text-sm text-center font-serif italic pb-4">
            *Company currently in stealth
          </div>
        </section>
      </div>
      <div className="PINCard shadow-2xl rounded-xl p-4 h-44 w-96 opacity-75 hover:opacity-100 hover:bg-cyan-100 hover:h-96 duration-300 overflow-hidden">
        <section className="card-section">
          <div className="justify-center text-center lg:flex gap-10 center md:flex grid place-items-center">
            <img alt="" src="/pin_logo.png" width={200} height={100} />
          </div>
          <div>
            <h3 className="text-3xl text-center font-serif pt-2">
              Project Innovate Newark
            </h3>
            <h2 className="text-xl text-center font-serif pb-4">
              Software Engineer
            </h2>
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
            <div className="grid place-items-center cursor-pointer font-bold">
              <a href="https://www.projectinnovatenewark.org">Visit Website</a>
              <HiCursorClick className="place-content-end" />
            </div>
          </div>
        </section>
      </div>
      <div className="healthCard shadow-2xl p-2 rounded-xl h-44 w-96 opacity-75 hover:opacity-100 hover:bg-cyan-100 hover:h-96 duration-300 overflow-hidden">
        <section className="card-section">
          <div className="justify-center text-center lg:flex gap-10 center md:flex grid place-items-center">
            <div className="py-4 text-5xl grid place-items-center">
              <RiMentalHealthFill className="grid place-items-center" />
            </div>
          </div>
          <h3 className="text-3xl text-center font-serif pt-2">
            Patient Portal App
          </h3>
          <h2 className="text-xl text-center font-serif pb-4">
            Personal Project
          </h2>
          <div className="text-md py-4 leading-8 text-gray-800 text-center place-items-center">
            <p className="font-bold">Technologies:</p>
            <p>React</p>
            <p>Express</p>
            <p>NextJS</p>
          </div>
          <div className="grid place-items-center cursor-pointer font-bold">
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
