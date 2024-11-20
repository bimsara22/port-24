
import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
 
  const projects = [
    {
      title: "Student Management System",
      description:
        "A comprehensive system to manage student data, performance, and attendance.",
    },
    {
      title: "E-commerce Platform",
      description:
        "A robust platform for managing online retail with a variety of features.",
    },
    {
      title: "Weather App",
      description:
        "An application that provides weather forecasts and live weather updates.",
    },
    {
        title: "Weather App",
        description:
          "An application that provides weather forecasts and live weather updates.",
      },
      {
        title: "Weather App",
        description:
          "An application that provides weather forecasts and live weather updates.",
      },
      {
        title: "Weather App",
        description:
          "An application that provides weather forecasts and live weather updates.",
      },
  ];

  return (
    <div className="container">
      <div className="cards ">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
