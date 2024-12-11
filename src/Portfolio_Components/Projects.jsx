import React from 'react';

const projects = [
  { title: 'Weather Application', description: 'Description of Project 1', link: '#' },
  { title: 'Food delivery Application', description: 'Frontend: React, HTML, CSS, JavaScript Backend: Node.js Build Tool: Vite', link: 'https://main--asete.netlify.app/#app-download' },

];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <a href={project.link} className="project-link">View Project</a>
    </div>
  );
};

const Projects = () => {
  return (
    <div id='project' className="project-section" >
      <h1 className="section-title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
