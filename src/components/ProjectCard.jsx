import React from "react";

const ProjectCard = ({ project }) => {
  console.log(project)
  return (
    <div className="project-card">
      <div className="project-card-top">
        <i className="folder far fa-folder"></i>
        <span className="group">
          {project.githubLink ? (
            <a href={project.githubLink} target="_blank">
              <i className="fab fa-github"></i>
            </a>
          ) : (
            ""
          )}
          {project.link ? (
            <a href={project.link} target="_blank">
              <i className="far fa-external-link"></i>
            </a>
          ) : (
            ""
          )}
        </span>
      </div>
      <div className="project-card-body">
        <h2 className="project-card-title">{project.title}</h2>
        <div className="project-card-description">{project.desctiption}</div>
      </div>
      <ul className="project-card-footer">
        {project.technologies.map((technologiy, index) => (
          <li key={index}>{technologiy}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
