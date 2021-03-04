import React from "react";
import "./style.css";

function Skills() {
  const skills = [
    'html5', 'css3', 'javascript', 'typescript', 'jquery', 'bootstrap', 'materialize', 'semanticui', 'nodejs', 
    'npm', 'express', 'handlebars', 'mysql', 'mongodb', 'pwa', 'webpack', 'react', 'angular', 'mean-mern',
    'github', 'bitbucket', 'heroku', 'aws', 'travis'
  ];

  return (
    <div className="col-lg-4">
      <h3 className="text-center text-info mt-4 animate__animated animate__fadeIn">
        <span className="text-secondary"> Skills</span>
      </h3>
      {skills.map(skill => 
        <img src={`${process.env.PUBLIC_URL}/assets/img/logos/${skill}.png`} 
        alt={skill} width="70px" className="logo mx-1 mt-2 animate__animated animate__zoomIn" title={skill} key={skill}/>
      )}
    </div>
  );
}

export default Skills;
