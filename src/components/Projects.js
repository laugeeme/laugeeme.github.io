import React from 'react';
import ProjectList from './ProjectList';
import projects from '../services/projects.json'; 

function Projects() {
  return (
    <section>
      <div className="projects-container scroll-area">
        <div className="projects-container_list">
        <h2>&#123;projects&#125;</h2>
        <ProjectList data={projects} />
        </div>

        
        </div>
    </section>
  );
}

export default Projects;
