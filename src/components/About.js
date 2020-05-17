import React from 'react';

function About() {
  return (
    <section>
      <div className="about-container scroll-area">
        <div className="about-container_text">
          <h2 className="about-container_title">{'{' + 'About' + '}'}</h2>
          <p>
            My name is Laura García. I'm an Agricultural Engineer who, being
            passionate about the world of technology, has decided to reinvent
            herself as a Front-End programmer to develop all my skills in this
            field.
          </p>
        </div>

        <div className="about-container_skills">
          <h2 className="about-container_skills__title">
            {'{' + 'Technical skills' + '}'}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default About;
