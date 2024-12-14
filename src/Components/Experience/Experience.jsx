import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      position: "Junior Software Developer",
      company: "Central Park Puppies Inc,USA",
      techStack: "JavaScript, React, Node.js, MongoDB",
      description: "Developed and maintained web applications, focusing on user experience and performance optimization. Collaborated with cross-functional teams to build scalable solutions."
    },
    {
      position: "Intern Software Engineer",
      company: "Sri Lankan Airlines Ltd",
      techStack: "HTML, CSS, JavaScript, React",
      description: "Built responsive and visually appealing web interfaces, ensuring a seamless experience across devices. Implemented best practices for code structure and UI design."
    }
  ];

  return (
    <div className="unique-experience-container">
    {experiences.map((exp, index) => (
      <div className="unique-experience-card" key={index}>
        <div className="unique-card-header">
          <h3>{exp.position}</h3>
          <span className="unique-company-name">{exp.company}</span>
        </div>
        <div className="unique-card-body">
          <p><strong>Tech Stack:</strong> {exp.techStack}</p>
          <p><strong>Description:</strong> {exp.description}</p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Experience;
