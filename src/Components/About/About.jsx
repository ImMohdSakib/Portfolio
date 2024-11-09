import React, { useRef, useEffect } from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const frontendRef = useRef(null);
  const databaseRef = useRef(null);
  const backendRef = useRef(null);

  useEffect(() => {
    // About section animation
    gsap.fromTo(
      aboutRef.current,
      { opacity: 1, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // Bidirectional animation
        },
      }
    );

    // Frontend Developer skill animation
    gsap.fromTo(
      frontendRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: frontendRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Database Developer skill animation
    gsap.fromTo(
      databaseRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: databaseRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Backend Developer skill animation
    gsap.fromTo(
      backendRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: backendRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div
      id="About"
      ref={aboutRef}
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div
              ref={frontendRef}
              className="flex gap-3 py-4"
            >
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I'm a Frontend Developer skilled in HTML, CSS, JavaScript, and
                  React. I specialize in creating responsive, user-friendly
                  interfaces that deliver seamless experiences across devices.
                  With a strong foundation in core web technologies and React
                  for dynamic UI components, I aim to build engaging and
                  interactive digital solutions that leave a lasting impact on
                  users.
                </p>
              </span>
            </div>
            <div
              ref={databaseRef}
              className="flex gap-3 py-4"
            >
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As a Database Developer skilled in MySQL and Java, with a
                  focus on building efficient, reliable, and secure databases. I
                  enjoy creating data solutions that support robust applications
                  and ensure smooth data handling and retrieval. My expertise in
                  MySQL allows me to design databases that are well-structured
                  and optimized for performance, while my Java knowledge helps
                  me integrate database operations seamlessly into applications.
                  My goal is to manage and organize data in a way that enhances
                  application functionality and user experience.
                </p>
              </span>
            </div>
            <div
              ref={backendRef}
              className="flex gap-3 py-4"
            >
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As a Backend Developer skilled in Java and Spring Boot, with a
                  focus on building efficient, secure, and scalable server-side
                  applications. My expertise includes handling data operations,
                  creating RESTful APIs, and ensuring smooth integration with
                  databases. I aim to develop reliable backend systems that
                  provide a solid foundation for powerful and user-friendly
                  applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
