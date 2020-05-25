import React from 'react';
import linkedinStatic from '../assets/images/linkedinStatic.svg';
import linkedinDinamic from '../assets/images/linkedinDinamic.gif';
import emailStatic from '../assets/images/letterStatic.svg';
import emailDinamic from '../assets/images/letterDinamic.gif';
import githubStatic from '../assets/images/githubStatic.svg';
import twitterStatic from '../assets/images/twitterStatic.svg';
import twitterDinamic from '../assets/images/twitterDinamic.gif';

function Contact() {
  return (
    <footer>
      <span id="triangle"></span>
      <div div className="contact-container scroll-area" id="contact">
        <div className="rrss-container">
          <div className="rrss-container_linkedin">
            <a href="https://www.linkedin.com/in/laugeeme" alt="Linkedin profile" target="_blank" rel="noopener noreferrer">
              <img src={linkedinStatic} className="static" alt="Linkedin profile"></img>
            </a>
            <a href="https://www.linkedin.com/in/laugeeme" alt="Linkedin profile" target="_blank" rel="noopener noreferrer">
              <img
                src={linkedinDinamic}
                className="dinamic"
                alt="Linkedin profile"
              ></img>
            </a>
          </div>
            <div className="rrss-container_github">
            <a href="https://github.com/laugeeme" alt="Github profile" target="_blank" rel="noopener noreferrer">
              <img src={githubStatic} className="rotate" alt="Github profile"></img>
            </a>
          </div>  
          <div className="rrss-container_mail">
            <a href="mailto: hola@laugeeme.com" alt="Email contact" target="_blank" rel="noopener noreferrer">
              <img src={emailStatic} className="static" alt="Email contact"></img>
            </a>
            <a href="mailto: hola@laugeeme.com" alt="Email contact" target="_blank" rel="noopener noreferrer">
              <img
                src={emailDinamic}
                className="dinamic"
                alt="Email contact"
              ></img>
            </a>
          </div> 
          <div className="rrss-container_mail">
            <a href="https://twitter.com/laugeeme" alt="Twitter profile" target="_blank" rel="noopener noreferrer">
              <img src={twitterStatic} className="static" alt="Twitter profile"></img>
            </a>
            <a href="https://twitter.com/laugeeme" alt="Twitter profile" target="_blank" rel="noopener noreferrer">
              <img
                src={twitterDinamic}
                className="dinamic"
                alt="Twitter profile"
              ></img>
            </a>
          </div> 
        </div>
      </div>
    </footer>
  );
}

export default Contact;
