import React, { useState } from "react";
import { RiMentalHealthFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { HiCursorClick } from "react-icons/hi";

const Card = () => {
  const [showPIN, setShowPIN] = useState(false);
  const [showHealthCard, setShowHealthCard] = useState(false);

  const handlePINCard = () => {
    setShowPIN(!showPIN);
  };

  const handleHealthCard = () => {
    setShowHealthCard(!showHealthCard);
  };

  return (
    <>
      <div className={`PINCard ${showPIN ? "expanded" : ""}`}>
        <section
          className={`text-center p-8 rounded-xl w-96 h-56 my-10 mx-auto ${
            showPIN
              ? ""
              : "shadow-2xl hover:border-transparent hover:bg-teal-100"
          }`}
        >
          <div className="justify-center text-center lg:flex gap-10 center md:flex grid place-items-center">
            <img alt="" src="/pin_logo.png" width={200} height={100} />
          </div>
          <div>
            <h3 className="text-3xl py-4">Project Innovate Newark</h3>
            <div className="relative">
              <div
                className="grid place-items-center"
                style={{ cursor: "pointer" }}
              >
                {showPIN ? (
                  <IoIosArrowUp
                    className="grid place-items-center"
                    onClick={handlePINCard}
                  />
                ) : (
                  <IoIosArrowDown
                    className="grid place-items-center"
                    onClick={handlePINCard}
                  />
                )}
              </div>
              {showPIN && (
                <div className="data h-80 absolute bottom-5% text-center w-275 left-0 right-0 mx-auto px-5% box-border">
                  <p className="font-bold">Technologies:</p>
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
                  <div className="grid place-items-center">
                    <a href="https://www.projectinnovatenewark.org">
                      Visit Website
                    </a>
                    <HiCursorClick className="place-content-end" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <div className={`healthCard ${showHealthCard ? "expanded" : ""}`}>
        <section
          className={`text-center p-8 rounded-xl w-96 h-56 my-10 mx-auto ${
            showHealthCard
              ? ""
              : "shadow-2xl hover:border-transparent hover:bg-teal-100"
          }`}
        >
          <div className="justify-center lg:flex gap-10 center md:flex grid place-items-center">
            <div className="py-4 text-5xl grid place-items-center">
              <RiMentalHealthFill className="grid place-items-center" />
            </div>
          </div>
          <h3 className="text-3xl py-3"> Patient Portal App</h3>
          <div className="relative">
            <div
              className="grid place-items-center"
              style={{ cursor: "pointer" }}
            >
              {showHealthCard ? (
                <IoIosArrowUp
                  className="grid place-items-center"
                  onClick={handleHealthCard}
                />
              ) : (
                <IoIosArrowDown
                  className="grid place-items-center"
                  onClick={handleHealthCard}
                />
              )}
            </div>
            <div>
              {showHealthCard && (
                <div className="relative">
                  <div className="data text-center left-0 right-0">
                    <div className="text-md py-4 leading-8 text-gray-800 text-center place-items-center">
                      <p className="font-bold">Technologies:</p>
                      <p>React</p>
                      <p>Express</p>
                      <p>Next</p>
                    </div>
                    <div className="grid place-items-center">
                      <a href="https://github.com/nicbrown1121/patient_portal">
                        Visit GitHub
                      </a>
                      <HiCursorClick className="place-content-end" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
