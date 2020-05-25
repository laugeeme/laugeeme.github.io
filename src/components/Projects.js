import React from 'react';
import ProjectList from './ProjectList';
import projects from '../services/projects.json';

function Projects() {
  return (
    <section className="projects-container_list" id="projects">
      <h2>&#123;projects&#125;</h2>
      <ProjectList data={projects} />
    </section>
  );
}

export default Projects;
