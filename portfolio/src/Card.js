import React, { useState } from "react";
import { RiMentalHealthFill } from "react-icons/ri";

const Card = () => {
  const [isFlipped, setFlipped] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };
  const handleClick2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  return (
    <>
      <div
        className={`card ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <section className="text-center shadow-2xl p-8 rounded-xl my-10">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="justify-center lg:flex gap-10 center md:flex grid place-items-center">
                {/* CENTER IMAGE */}
                <a href="https://www.projectinnovatenewark.org">
                  <img alt="" src="/pin_logo.png" width={200} height={100} />
                </a>
                <div>
                  <h3 className="text-3xl py-4">Project Innovate Newark</h3>
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
            <div className="flip-card-back">
              <div className="text-md py-4 leading-8 text-gray-800">
                <p>I am on the back</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className={`card ${isFlipped2 ? "flipped" : ""}`}
        onClick={handleClick2}
      >
        <section className="text-center shadow-2xl p-8 rounded-xl my-10">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="justify-center lg:flex gap-10 center md:flex grid place-items-center">
                {/* CENTER IMAGE */}
                <div className="py-4 text-5xl grid place-items-center">
                  <RiMentalHealthFill className="place-items-center" />
                </div>
                <div>
                  <h3 className="text-3xl py-1"> Patient Portal App</h3>
                  <div>
                    <p className="text-md py-8 leading-8 text-gray-800">
                      React App with Flask and Postgres SQL
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card-back">
              <div className="text-md py-4 leading-8 text-gray-800">
                <p>I am on the back</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
