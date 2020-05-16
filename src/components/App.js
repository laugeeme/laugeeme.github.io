/* eslint-disable no-useless-constructor */
import React from 'react';
/* import logo from './logo.svg'; */
import '../stylesheets/App.scss';
import Menu from './Menu';
import Start from './Start';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-container">
        <Menu />
        <div className="scroll-snapping">
          <Start />
          <About />
          <Projects />
          <Contact />
        </div>

        {/*         <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    );
  }
}

export default App;
