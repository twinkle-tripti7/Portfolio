import React from 'react';

const projects = [
  {
    title: 'Weather Application',
    description: 'A user-friendly app that displays real-time weather information for any location.',
    link: '#',
  },
  {
    title: 'Food Delivery Application',
    description: 'Frontend: React, HTML, CSS, JavaScript. Backend: Node.js. Build Tool: Vite.',
    link: 'https://main--asete.netlify.app/#app-download',
  },
  {
    title: 'Food Delivery Application',
    description: 'Frontend: React, HTML, CSS, JavaScript. Backend: Node.js. Build Tool: Vite.',
    link: 'https://main--asete.netlify.app/#app-download',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="project" className="project-section bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
