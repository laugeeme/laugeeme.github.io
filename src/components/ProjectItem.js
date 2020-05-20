import React from 'react';

function ProjectItem(props) {
  return (
    <React.Fragment>
      <div className="mockup-image">
        <img src={props.img} alt={props.title}></img>
      </div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <ul className="projectItem-tags">
          {props.tags.map((tag, index) => (
            <li key={index}><span></span>{tag}</li>
          ))}
        </ul>
        <a href={props.url} alt={props.title}>Web</a>        
        ||
        <a href={props.urlGithub} alt={props.title}>Code</a>
      </div>
    </React.Fragment>
  );
}

export default ProjectItem;
