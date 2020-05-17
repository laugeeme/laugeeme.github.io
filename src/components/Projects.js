import React from 'react';
import ProjectList from './ProjectList';
import projects from '../services/projects.json'; 

function Projects() {
  return (
    <section>
      <div className="projects-container scroll-area">
        este es el projects container
        <ProjectList data={projects} />
        
        </div>
    </section>
  );
}

export default Projects;
