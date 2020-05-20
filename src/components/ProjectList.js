import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList(props) {
  return (

    <>
    
    <ul className="projectlist-container">

      {props.data.map((projectObj) => (

        <li
          className="projectListLi"
          key={projectObj.id}
          id={projectObj.id}
        >
          <ProjectItem
            id={projectObj.id}
            title={projectObj.title}
            description={projectObj.description}
            img={projectObj.img}
            tags={projectObj.tags}
            url={projectObj.url}
            urlGithub={projectObj.urlGithub}
          />
        </li>

      ))}

    </ul>
    </>
  );
}

export default ProjectList;
