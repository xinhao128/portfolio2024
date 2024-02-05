import React from 'react';
import "./Skills.scss";

const Skills = () => {
  return (
    <div>
      <div className="section-header-container">
        <h2 className='section-header'>Skills</h2>
      </div>
      <div className="container skills-grid">
        <div className="skills-section-card">
          <h3>Programming</h3>
        </div>
        <div className="skills-section-card">
          <h3>Tools & Technologies</h3>
        </div>
        <div className="skills-section-card">
          <h3>Database & Servers</h3>
        </div>
        <div className="skills-section-card">
          <h3>Language Skills</h3>
        </div>
      </div>
    </div>
  )
}

export default Skills;
