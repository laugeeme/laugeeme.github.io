import React from 'react';
import lauraPhoto from '../assets/images/laura1.png'



function Start() {
    return (
      <div className="start-container scroll-area">
          <div className="lauraPhoto-container">
            <img src={lauraPhoto} alt="Laura"></img>
          </div>
          <div className="lauraText-container">
          Welcome... Let's get started.
          </div>

      </div>
    );
  }



  export default Start;