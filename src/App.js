import React, { useEffect, useRef } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import Card from "./Card";
import About from "./About";
import { gsap } from "gsap";

const Home = () => {
  const h2Ref = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.to(cardRef.current, {
      duration: 2,
      y: -40,
      opacity: 1,
    });
    gsap.to(h2Ref.current, {
      duration: 2,
      y: 20,
      opacity: 1,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <main className="bg-gray-100 min-h-screen overflow-y-auto">
        <section>
          <div className="text-center pt-10">
            <h2
              ref={h2Ref}
              className="title text-6xl py-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-800 to-cyan-200 font-serif"
            >
              Nicole Garofalo
            </h2>
            <div className="flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/nicolemgarofalo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl pt-4 text-gray-600 hover:text-cyan-700 hover:scale-125 duration-200"
              >
                <AiFillLinkedin />
              </a>
              <h3 className="text-2xl pt-4 pl-2 font-serif">
                Software Engineer
              </h3>
            </div>
          </div>
        </section>
        <div>
          <About />
        </div>
        {/* PROJECT SECTION */}
        <div>
          <h3 className="text-4xl text-center py-20 inset-x-0 bottom-0 h-16 font-serif text-cyan-700">
            Experience
          </h3>
        </div>
        <div
          ref={cardRef}
          className="justify-center lg:flex gap-12 p-4 center md:flex "
        >
          <Card />
        </div>
      </main>
    </div>
  );
};

export default Home;
