import React from 'react';

function ProjectItem(props) {
  return (
    <div className="projectItem-container">
      <div className="projectItem-image">
        <img src={props.img} alt={props.title}></img>
      </div>
      <div className="projectItem-details">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <ul className="projectItem-tags">
          {props.tags.map((tag, index) => (
            <li key={index}>
              <span></span>
              {tag}
            </li>
          ))}
        </ul>
        <div className="projectItem-links">
          <a
            href={props.url}
            alt={props.title}
            rel="noopener noreferrer"
            target="_blank"
          >
            Web
          </a>
          <a
            href={props.urlGithub}
            alt={props.title}
            rel="noopener noreferrer"
            target="_blank"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
