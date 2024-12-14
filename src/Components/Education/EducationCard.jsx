import React from "react";
import "./Education.css";
import rusls from "../../Images/rusls.jpg";
import esoft from '../../Images/esoft.png';

const Education = () => {
  const educationDetails = [
    {
      image: rusls ,
      degree: "Bachelor of Science in Information Systems",
      institution: "Rajarata University of Sri Lanka",
      year: "2020 - 2024",
      description:
        "Focused on software engineering, algorithms, and data structures. Participated in various coding challenges and hackathons.",
    },
    {
      image: esoft ,
      degree: " Diploma in Information Technology",
      institution: "Esoft Metro Campus",
      year: "2019 - 2020",
      description:
        "Specializing in machine learning, deep learning, and natural language processing. Researching AI for automation in healthcare.",
    },
  ];

  return (
    <div className="education-container">
      {educationDetails.map((edu, index) => (
        <div className="education-card" key={index}>
          <div className="card-header">
            <img src={edu.image} alt="rusl" className="institution-image" />
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
