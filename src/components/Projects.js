import React from 'react';
import ProjectList from './ProjectList';
import projects from '../services/projects.json';

function Projects() {
  return (
    <section className="projects-container_list">
      <ProjectList data={projects} />
    </section>
  );
}

export default Projects;
