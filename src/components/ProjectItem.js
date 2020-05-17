import React from 'react';

function ProjectItem(props) {
  return (
    <React.Fragment>
      <div>
        <img src={props.img} alt={props.title}></img>
      </div>
      <div>
        <p>{props.title}</p>
        <ul className="tags">
          {props.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default ProjectItem;
