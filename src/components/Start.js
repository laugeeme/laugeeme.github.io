import React from 'react';
import lauraPhoto from '../assets/images/laura.png';
import Typewriter from './Typewriter';

function Start() {
  return (
    <div className="start-container scroll-area">
      <div className="lauraPhoto-container">
        <img src={lauraPhoto} alt="Laura"></img>
      </div>
      <div className="lauraText-container">
        <Typewriter />
      </div>
    </div>
  );
}

export default Start;
