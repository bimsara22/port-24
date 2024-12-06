import React from 'react';
import './Skill.css';

// Array of skills (you can replace these with your own skill icons and titles)
const skills = [
  { icon: '🌐', title: 'Web Development' },
  { icon: '⚙️', title: 'Machine Learning' },
  { icon: '🖥️', title: 'Software Development' },
  { icon: '📱', title: 'Mobile Development' },
  { icon: '📦', title: 'Cloud Computing' },
  { icon: '🎨', title: 'UI/UX Design' },
  { icon: '🔒', title: 'Cyber Security' },
  { icon: '🚀', title: 'DevOps' },
];

const Skills = () => {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill-card" key={index}>
          <div className="skill-icon">{skill.icon}</div>
          <h4 className="skill-title">{skill.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Skills;
