import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      position: "Software Developer",
      company: "Tech Innovators",
      techStack: "JavaScript, React, Node.js, MongoDB",
      description: "Developed and maintained web applications, focusing on user experience and performance optimization. Collaborated with cross-functional teams to build scalable solutions."
    },
    {
      position: "Frontend Engineer",
      company: "Creative Solutions",
      techStack: "HTML, CSS, JavaScript, React",
      description: "Built responsive and visually appealing web interfaces, ensuring a seamless experience across devices. Implemented best practices for code structure and UI design."
    }
  ];

  return (
    <div className="experience-container">
      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <div className="card-header">
            <h3>{exp.position}</h3>
            <span className="company-name">{exp.company}</span>
          </div>
          <div className="card-body">
            <p><strong>Tech Stack:</strong> {exp.techStack}</p>
            <p><strong>Description:</strong> {exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
