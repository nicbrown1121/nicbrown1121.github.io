import React, { useState } from "react";
import { RiMentalHealthFill } from "react-icons/ri";

const Card = () => {
  return (
    <>
      <div className="PINCard">
        <section className="text-center shadow-2xl p-8 rounded-xl my-10 hover:h-80 hover:shadow-2xl hover:border-transparent hover:bg-teal-100">
          <div className="justify-center lg:flex gap-10 center md:flex grid place-items-center">
            <a href="https://www.projectinnovatenewark.org">
              <img alt="" src="/pin_logo.png" width={200} height={100} />
            </a>
          </div>
          <div>
            <h3 className="text-3xl py-4">Project Innovate Newark</h3>
            <div className="relative hover:py-14">
              <div className="data opacity-1 absolute bottom-5% bg-white text-center w-275 h-80 left-0 right-0 mx-auto px-5% box-border transition-opacity duration-400">
                <p className="font-bold">Skills:</p>
                <div className="grid grid-cols-2 gap-4 text-md py-4 leading-8 text-gray-800">
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
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <div className="flip-card-back">
            <div className="text-md py-4 leading-8 text-gray-800">
              <p>
                Project Innovate Newark is an organization that works to create
                after school programs for high school students in the Newark
                area. These programs center around business education and
                computer science.
              </p>
            </div>
          </div> */}

      <div className="healthCard hover:h-96">
        <section className="text-center shadow-2xl h-52 p-8 rounded-xl my-10 hover:h-80 hover:shadow-2xl hover:border-transparent hover:bg-teal-100">
          <div className="justify-center lg:flex gap-10 center md:flex grid place-items-center">
            <div className="py-4 text-5xl grid place-items-center">
              <RiMentalHealthFill className="grid place-items-center" />
            </div>
          </div>
          <div className="grid place-items-center">
            <a href="https://github.com/nicbrown1121/patient_portal">
              <h3 className="text-3xl py-1"> Patient Portal App</h3>
            </a>
            <div>
              <div className="relative hover:py-14">
                <div className="data opacity-1 absolute bottom-5% bg-white text-center w-275 h-80 left-0 right-0 mx-auto px-5% box-border transition-opacity duration-400">
                  {" "}
                  <div className="text-md py-8 leading-8 text-gray-800 text-center">
                    <p className="font-bold">Skills:</p>
                    <p>React</p>
                    <p>Express</p>
                    <p>Next</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flip-card-back">
              <div className="text-md text-gray-800">
                <p>I am on the back</p>
              </div>
            </div> */}
        </section>
      </div>
    </>
  );
};

export default Card;
