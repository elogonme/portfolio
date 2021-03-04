import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from './projects.js';

function Portfolio() {
    return (
      <div className="container main">
        <div className="card mt-2 col-lg-12 col-xs-12 bg-light shadow">
          <div className="card-body pt-2">
            <h2 className="card-title border-bottom pb-2 text-info">
              <i className="fas fa-briefcase mr-2 text-secondary"></i>
              Portfolio
            </h2>
            <div className="card-deck">
              <div className="row row-cols-1 row-cols-md-2">
                { projects.map(project => 
                  <ProjectCard 
                  key={project.title}
                  title={project.title}
                  url={project.url}
                  image={project.image}
                  repoUrl={project.repoUrl}
                  description={project.description}
                />
                )}
              </div>  
            </div>
          </div>
        </div>   
      </div>
    );
}

export default Portfolio;
