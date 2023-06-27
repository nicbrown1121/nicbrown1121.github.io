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
    <div>
      <div></div>
      <main className="bg-gray-100 h-screen">
        <section className="min-h-100">
          <div className="text-center p-10">
            <h2
              ref={h2Ref}
              className="title text-5xl py-2 text-teal-600 font-medium font-serif"
            >
              Nicole Brown
            </h2>
            <h3 className="text-2xl">Software Engineer</h3>
          </div>
          <div className="text-3xl flex justify-center py-0 text-gray-600">
            <a
              href="https://www.linkedin.com/in/nicolebrownnutrition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </section>
        {/* PROJECT SECTION */}
        <h3 className="text-3xl text-center py-20 \ inset-x-0 bottom-0 h-16 font-serif text-teal-700">
          Projects
        </h3>
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
