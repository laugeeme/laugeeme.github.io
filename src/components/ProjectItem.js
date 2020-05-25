import React from 'react';

function ProjectItem(props) {
  return (
    <article>
      <div
        className="projects-container scroll-area"
      >
        <div
          className="projectItem-container"
          style={
            props.id % 2 === 0
              ? { flexDirection: 'row-reverse' }
              : { flexDirection: 'row' }
          }
        >
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
                className="button-link"
              >
                WEB
              </a>
              <a
                href={props.urlGithub}
                alt={props.title}
                rel="noopener noreferrer"
                target="_blank"
                className="button-link"
              >
                CODE
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectItem;
