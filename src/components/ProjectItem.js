import React from 'react';

function ProjectItem(props) {
  return (
    <article>
      <div className="projects-container scroll-area">
        <h2>&#123;projects&#125;</h2>
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
                Link to website
              </a>
              <a
                href={props.urlGithub}
                alt={props.title}
                rel="noopener noreferrer"
                target="_blank"
              >
                Link to code
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectItem;
