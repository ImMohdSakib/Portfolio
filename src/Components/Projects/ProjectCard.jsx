import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerImg from "../../assets/photo-C8q0KQHG.png";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ title, main, demoLink, sourceCodeLink }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Updated GSAP animation with ScrollTrigger
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0, // Final state
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%", // Start animation when card is 85% in view
          toggleActions: "play none none none", // Plays only once and remains visible
          once: true, // Animation won't replay or reset
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="p-3 md:p-6 flex flex-col w-full bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl"
    >
      <img className="p-4" src={bannerImg} alt="Project Banner" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Demo
        </a>
        <a
          href={sourceCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
