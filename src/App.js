import React, { Component } from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

class App extends Component {
  render() {
    return (
      <div className="Site-wrapper">
        
        <header className="Site-header">
          <h1 className="Site-title">Wes deLange</h1>
        </header>
        
        <div className="My-info"> 
          <h2>Next Adventure:</h2>
          <h1>Front End Web Develepment</h1>
          <h3>Currently at RED Academy</h3>
          <p className="My-intro">
            My journey into the world of web development has just begun.
            A strong desire to learn new skills and expand my realm of competence has lead me to RED Academy.
          </p>
        </div>

      </div>
    );
  }
}

export default App;
