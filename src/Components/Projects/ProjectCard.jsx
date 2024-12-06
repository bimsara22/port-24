import React from "react";
import image1 from "../../Images/background.png";

function ProjectCard({ project }) {
  return (
    <div className="card-project">
      <div className="image-container">
        <img src={image1} alt={project.title} className="image" />
      </div>
      <div className="text-area">
        <div className="project">
          <h5>{project.title}</h5>
        </div>
        <div className="project-description">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
