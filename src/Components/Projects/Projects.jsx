import React from "react";
import "./Projects.css"; // Importing the CSS here directly
import sms from "../../Images/sms.png";

function Projects() {
  const projects = [
    {
      p_image: sms,
      title: "Student Management System",
      description:
        "A comprehensive system to manage student data, performance, and attendance.",
    },
    {
      p_image: sms,
      title: "E-commerce Platform",
      description:
        "A robust platform for managing online retail with a variety of features.",
    },
    {
      p_image: sms,
      title: "Weather App",
      description:
        "An application that provides weather forecasts and live weather updates.",
    },
    {
      p_image: sms,
      title: "Weather App",
      description:
        "An application that provides weather forecasts and live weather updates.",
    },
    {
      p_image: sms,
      title: "Weather App",
      description:
        "An application that provides weather forecasts and live weather updates.",
    },
    {
      p_image: sms,
      title: "Weather App",
      description:
        "An application that provides weather forecasts and live weather updates.",
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="card-project">
          <div className="image-container">
            <img src={project.p_image} alt="project" className="image" />
          </div>
          <div className="text-area">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
