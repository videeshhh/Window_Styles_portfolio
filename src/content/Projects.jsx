import React from 'react';
import { projectsData } from './Projects_data.js'; 
import './styles/Project_style.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-date">{project.date}</span>
      </div>

      <div className="project-links">
        {project.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            {link.label} ↗
          </a>
        ))}
      </div>

      <ul className="project-highlights">
        {project.highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {project.technologies && (
        <div className="project-tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectsList = () => {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {/* Map over the correctly imported variable */}
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;    