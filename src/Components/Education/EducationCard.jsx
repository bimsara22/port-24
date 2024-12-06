import React from "react";
import "./Education.css";
import rusls from "../../Images/rusls.jpg";

const Education = () => {
  const educationDetails = [
    {
      image: rusls ,
      degree: "Bachelor of Science in Computer Science",
      institution: "XYZ University",
      year: "2018 - 2022",
      description:
        "Focused on software engineering, algorithms, and data structures. Participated in various coding challenges and hackathons.",
    },
    {
      image: rusls ,
      degree: " Artificial Intelligence",
      institution: "ABC Institute of Technology",
      year: "2023 - Present",
      description:
        "Specializing in machine learning, deep learning, and natural language processing. Researching AI for automation in healthcare.",
    },
  ];

  return (
    <div className="education-container">
      {educationDetails.map((edu, index) => (
        <div className="education-card" key={index}>
          <div className="card-header">
            <img src={rusls} alt="rusl" className="institution-image" />
          </div>
          <div className="card-body">
            <h5>{edu.degree}</h5>
            <span className="institution-name">{edu.institution}</span>
            <p>
              <strong>Year:</strong> {edu.year}
            </p>
            <p>
              <strong>Description:</strong> {edu.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
