import React from 'react';
import { Link } from 'react-scroll';

function Menu() {
  return (
    <nav className="menu-container">
      <ul className="menu-container_list">
        <li className="menu-container_list__item">
          <Link
            activeClass="active"
            to="start"
            spy={true}
            smooth={true}
            duration={600}
          >
            start
          </Link>
        </li>
        <li className="menu-container_list__item">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={600}
          >
            about
          </Link>
        </li>
        <li className="menu-container_list__item">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={600}
          >
            projects
          </Link>
        </li>
        <li className="menu-container_list__item">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={600}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
