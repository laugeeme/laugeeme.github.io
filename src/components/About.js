import React from 'react';
import evolution from '../assets/images/evolution.png';
import htmlIcon from '../assets/icons/skills-icons/html5.svg';
import cssIcon from '../assets/icons/skills-icons/css3.svg';
import javascriptIcon from '../assets/icons/skills-icons/js.svg';
import reactIcon from '../assets/icons/skills-icons/react.svg';
import gitIcon from '../assets/icons/skills-icons/git.svg';
import sassIcon from '../assets/icons/skills-icons/sass.svg';
import gulpIcon from '../assets/icons/skills-icons/gulp.svg';
import scrumIcon from '../assets/icons/skills-icons/scrum.png';
import photoshopIcon from '../assets/icons/skills-icons/photoshop.png';
import inkscapeIcon from '../assets/icons/skills-icons/inkscape.png';

function About() {
  return (
    <section>
      <div className="about-container scroll-area" id="about">
        <div className="about-container_text">
          <h2>&#123;about me&#125;</h2>
          <p>
            My name is Laura García. I'm a{' '}
            <span className="underline">frontend programmer</span> who likes to
            work with <span className="underline">good practices</span> and high
            attention to <span className="underline">detail.</span> Usability
            and UX are in my <span className="underline">constant focus</span>.
            When I'm not programming you can find me taking pictures, or
            practicing calligraphy.
          </p>
        </div>

        <div className="about-container_skills">
          <div className="about-container_skills__title">
            <h2>&#123;technical skills&#125;</h2>
          </div>

          <div className="about-container_skills__skills animate__animated animate__fadeInUp">
            <ul className="about-skills_list ">
              <li className="about-skills_item ">
                <img src={htmlIcon} alt="HTML 5" />
                <p>HTML 5</p>
              </li>
              <li className="about-skills_item">
                <img src={cssIcon} alt="CSS 3" />
                <p>CSS 3</p>
              </li>
              <li className="about-skills_item">
                <img src={javascriptIcon} alt="JavaScript ES6" />
                <p>JavaScript ES6</p>
              </li>
              <li className="about-skills_item">
                <img src={reactIcon} alt="React" />
                <p>React</p>
              </li>
              <li className="about-skills_item">
                <img src={gitIcon} alt="Git" />
                <p>Git</p>
              </li>
              <li className="about-skills_item">
                <img src={sassIcon} alt="Sass" />
                <p>Sass</p>
              </li>
              <li className="about-skills_item">
                <img src={gulpIcon} alt="Gulp" />
                <p>Gulp</p>
              </li>
              <li className="about-skills_item">
                <img src={scrumIcon} alt="Scrum" />
                <p>Scrum</p>
              </li>
              <li className="about-skills_item">
                <img src={photoshopIcon} alt="Adobe Photoshop" />
                <p>Adobe Photoshop</p>
              </li>
              <li className="about-skills_item">
                <img src={inkscapeIcon} alt="Inkscape" />
                <p>Inkscape</p>
              </li>
            </ul>

            <div className="about-container_skills__evolution">
              <img src={evolution} alt="evolution"></img>
            </div>
          </div>
        </div>

        <div className="about-container_cv">
          <a
            href="./static/media/CVLauraG.pdf"
            download="CV_LauraGM"
            alt="CV Laura"
          >
            Download my CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
