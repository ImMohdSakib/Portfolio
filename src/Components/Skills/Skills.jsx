import React, { useRef, useEffect } from "react";

// Import icons
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaJava , FaPython, FaCode } from "react-icons/fa";
import { SiRedux, SiNextdotjs, SiFlutter, SiMysql, SiGraphql, SiPostgresql, SiMongodb, SiFirebase, SiSpringboot } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);

  useEffect(() => {
    // Frontend Section Animation
    gsap.fromTo(
      frontendRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: frontendRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // Bidirectional animation
        },
      }
    );

    // Backend Section Animation
    gsap.fromTo(
      backendRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: backendRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // Bidirectional animation
        },
      }
    );
  }, []);

  return (
    <div id="Experience" className="p-8 md:p-20 md:mt-7 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-6">Skills</h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Frontend Section */}
        <div
          ref={frontendRef}
          className="p-6 bg-black rounded-lg shadow-lg w-full md:w-1/2"
        >
          <h2 className="text-center text-2xl font-semibold mb-4">Frontend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#61DBFB" }}>
              <FaReact size={24} />
              <span>React Js</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#764ABC" }}>
              <SiRedux size={24} />
              <span>Redux</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#E34F26" }}>
              <FaHtml5 size={24} />
              <span>HTML</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#1572B6" }}>
              <FaCss3Alt size={24} />
              <span>CSS</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#F0DB4F" }}>
              <FaJsSquare size={24} />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#7952B3" }}>
              <FaBootstrap size={24} />
              <span>Bootstrap</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#0081CB" }}>
              <RiTailwindCssFill size={24} />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center p-5 rounded-md text-center" style={{ backgroundColor: "#EAFFCC", color: "green", fontWeight: "700" }}>
              {/* <FaCode size={24} /> */}
              <span>GSAP</span>
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <div
          ref={backendRef}
          className="p-6 bg-black rounded-lg shadow-lg w-full md:w-1/2"
        >
          <h2 className="text-center text-2xl font-semibold mb-4">Backend</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#E7AD63" }}>
              <FaJava size={24} />
              <span>Java</span>
            </div>
            <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#000000" }}>
              <SiSpringboot size={24} />
              <span>Spring Boot</span>
            </div>
            {/* <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#E10098" }}>
              <SiGraphql size={24} />
              <span>GraphQL</span>
            </div> */}
            {/* <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#306998" }}>
              <FaPython size={24} />
              <span>Python</span>
            </div> */}
            <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#00758F" }}>
              <SiMysql size={24} />
              <span>MySQL</span>
            </div>
            {/* <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#336791" }}>
              <SiPostgresql size={24} />
              <span>PostgreSQL</span>
            </div> */}
{/*             <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#47A248" }}>
              <SiMongodb size={24} />
              <span>MongoDB</span>
            </div> */}
            <div className="flex flex-col items-center p-2 rounded-md text-center" style={{ backgroundColor: "#DE3308" }}>
              <SiFirebase size={24} />
              <span>Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
