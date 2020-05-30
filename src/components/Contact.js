import React from 'react';
import linkedinStatic from '../assets/icons/rrss-icons/linkedinStatic.svg';
import linkedinDinamic from '../assets/icons/rrss-icons/linkedinDinamic.gif';
import emailStatic from '../assets/icons/rrss-icons/letterStatic.svg';
import emailDinamic from '../assets/icons/rrss-icons/letterDinamic.gif';
import githubStatic from '../assets/icons/rrss-icons/githubStatic.svg';
import twitterStatic from '../assets/icons/rrss-icons/twitterStatic.svg';
import twitterDinamic from '../assets/icons/rrss-icons/twitterDinamic.gif';

function Contact() {
  return (
    <footer>
      <div div className="contact-container scroll-area" id="contact">
        <h2>&#123;contact&#125;</h2>
        <div className="contact-container_contact">
          <div className="contact-container_title">
            <h3>Let's keep in touch!</h3>
          </div>

          <div className="rrss-container">
            <div className="rrss-container_linkedin">
              <a
                href="https://www.linkedin.com/in/laugeeme"
                alt="Linkedin profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinStatic}
                  className="static"
                  alt="Linkedin profile"
                ></img>
              </a>
              <img
                src={linkedinDinamic}
                className="dinamic"
                alt="Linkedin profile"
              ></img>
            </div>
            <div className="rrss-container_github">
              <a
                href="https://github.com/laugeeme"
                alt="Github profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={githubStatic}
                  className="rotate"
                  alt="Github profile"
                ></img>
              </a>
            </div>
            <div className="rrss-container_mail">
              <a
                href="mailto:hola@laugeeme.com?subject=Contacto%20portfolio"
                alt="Email contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={emailStatic}
                  className="static"
                  alt="Email contact"
                ></img>
              </a>

              <img
                src={emailDinamic}
                className="dinamic"
                alt="Email contact"
              ></img>
            </div>
            <div className="rrss-container_mail">
              <a
                href="https://twitter.com/laugeeme"
                alt="Twitter profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={twitterStatic}
                  className="static"
                  alt="Twitter profile"
                ></img>
              </a>

              <img
                src={twitterDinamic}
                className="dinamic"
                alt="Twitter profile"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-container_copy">
        <p>© 2020 · by laugeeme with ♡ · </p>
      </div>
    </footer>
  );
}

export default Contact;
