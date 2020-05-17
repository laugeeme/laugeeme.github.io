import React from 'react';
import Typical from 'react-typical';

function Typewriter() {
  return (
    <div>
      <p>
        <Typical
          loop={Infinity}
          wrapper="n"
          steps={[
            'Hi!',
            2000,
            'Welcome to my portfolio...',
            2000,
            "Here you can find out what I am and what I do...",
            2000,
            'Hope you enjoy it!',
            2000,
          ]}
        />
      </p>
    </div>
  );
}

export default Typewriter;
