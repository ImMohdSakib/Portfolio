import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const projectData = [
    {
      title: "Employee Management System",
      main: "Employee Management System on localhost that streamlines task assignment and tracking with an admin panel for efficient team management.",
      demoLink: "https://vercel.com/mohd-sakibs-projects/employee-management-system/",
      sourceCodeLink: "https://github.com/ImMohdSakib/employee-management-system",
    },
    {
      title: "YouTube Clone",
      main: "A YouTube clone designed for seamless video browsing and playback, mimicking the core viewing experience in a familiar layout.",
      demoLink: "https://github.com/ImMohdSakib/youtube-clone",
      sourceCodeLink: "https://github.com/ImMohdSakib/youtube-clone",
    },
    {
      title: "Trading Web Application",
      main: "A trading web app with real-time data integration for tracking stocks and managing trading actions efficiently.",
      demoLink: "https://livecryptoview.netlify.app/",
      sourceCodeLink: "https://github.com/ImMohdSakib/cryptocurrency",
    },
    {
      title: "Netflix Clone",
      main: "A Netflix clone with a Speech-to-Text application that converts spoken language into text in real-time, supporting multiple languages.",
      demoLink: "https://example.com/netflix-demo",
      sourceCodeLink: "https://github.com/username/netflix-clone",
    },    
    {
      title: "E-Commerce Platform",
      main: "An e-commerce platform with dynamic product listings, cart functionality, and user authentication.",
      demoLink: "https://example.com/ecommerce-demo",
      sourceCodeLink: "https://github.com/username/ecommerce-platform",
    },
  ];

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div id="Projects" className="p-10 md:p-20 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-6">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {projectData.slice(0, visibleCount).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            main={project.main}
            demoLink={project.demoLink}
            sourceCodeLink={project.sourceCodeLink}
          />
        ))}
      </div>

      {visibleCount < projectData.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="py-2 px-6 bg-[#465697] text-white rounded-lg font-semibold hover:opacity-85 hover:scale-105 transition-all duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
