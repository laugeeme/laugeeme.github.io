import React from 'react';
import evolution from '../assets/images/evolution.png';

function About() {
  return (
    <section>
      <div className="about-container scroll-area">
        <div className="about-container_text">
          <h2>&#123;about me&#125;</h2>
          <p>
            My name is Laura García. I'm a frontend programmer who likes to
            work with good practices and high attention to detail. Usability and
            UX are in my constant focus. When I'm not programming you can find
            me taking pictures, or practicing calligraphy.
          </p>
        </div>

        <div className="about-container_skills">
          <h2>&#123;technical skills&#125;</h2>
          <div className="about-container_skills__evolution">
             <img src={evolution} alt="evolution"></img> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
