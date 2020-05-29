import React from 'react';
import Typical from 'react-typical';

function Typewriter() {
  return (
    <div>
      <Typical
        loop={Infinity}
        wrapper="p"
        steps={[
          'Hi!',
          2000,
          'Welcome to my portfolio...',
          2000,
          'Here you can find who I am and what I do...',
          2000,
          'Hope you enjoy it!',
          2000,
        ]}
      />
    </div>
  );
}

export default Typewriter;
