import React, { useEffect, useRef } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import Card from "./Card";
import { gsap } from "gsap";

const Home = () => {
  const h2Ref = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.to(cardRef.current, {
      duration: 2,
      y: -40,
      opacity: 1,
      // ease: "power4.out",
    });
    gsap.to(h2Ref.current, {
      duration: 2,
      y: 20,
      opacity: 1,
      // ease: "power4.out",
    });
  }, []);

  return (
    <div className="min-h-screen">
      <main className="bg-gray-100 min-h-screen overflow-y-auto">
        <section>
          <div className="text-center pt-10">
            <h2
              ref={h2Ref}
              className="title text-5xl py-2 text-teal-600 font-medium font-serif"
            >
              Nicole Garofalo
            </h2>
            <div className="flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/nicolemgarofalo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl pt-4 text-gray-600"
              >
                <AiFillLinkedin />
              </a>
              <h3 className="text-2xl pt-4 pl-2">Software Engineer</h3>
            </div>
          </div>
        </section>
        {/* PROJECT SECTION */}
        <div>
          <h3 className="text-3xl text-center py-20 \ inset-x-0 bottom-0 h-16 font-serif text-teal-700">
            Experience
          </h3>
        </div>
        <div
          ref={cardRef}
          className="justify-center lg:flex gap-10 center md:flex "
        >
          <Card />
        </div>
      </main>
    </div>
  );
};

export default Home;
