import React from "react";
import "./style.css";

function ProjectCard(props) {
  const { title, url, image, repoUrl, description } = props;
  console.log('props: ', props);
  return (
    <div className="col mb-0">
      <div className="card-body">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={process.env.PUBLIC_URL + image} 
          className="card-img-top w-50 float-sm-left mr-4 btn mx-auto d-block  zoom-less animate__animated animate__zoomIn" 
            alt={title} />
        </a>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer bg-transparent">
        <a href={url} target="_blank" rel="noreferrer" className="card-link text-info">
          <i className="fas fa-mouse-pointer text-secondary mr-1"></i>
          Website
        </a>
        <a href={repoUrl} target="_blank" rel="noreferrer" className="card-link text-info">
          <i className="fab fa-github-square text-secondary mr-1"></i>
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
