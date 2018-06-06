import React, { Component } from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Aloha from './images/aloha-screenshot.png';
import Instanews from './images/instanews-screenshot.png';
import Inhabitent from './images/inhabitent-screenshot.png';
import Qod from './images/qod-screenshot.png';
import Bike from './images/bc-kamloops.jpg';
import Fish from './images/fish.jpg';

class App extends Component {
  render() {
    return (
      <div className="Site-wrapper">
        
        <header className="Site-header">
          <h1 className="Site-title">Wes deLange</h1>
          <nav>
            <a>About</a>
            <a>Portfolio</a>
            <a>Adventures</a>
            <a>Contact</a>
          </nav>
        </header>
        
        <div className="My-info"> 
          <h1>About Me</h1>
          <h3>Currently studying Web Development at RED Academy</h3>
          <p className="My-intro">
            My journey into the world of web development has just begun.
            A strong desire to learn new skills and expand my realm of competence has lead me to RED Academy.
          </p>
        </div>

        <h1>Portfolio</h1>
        <div className="My-portfolio">

          
          <div  id="aloha" className="project">
            <h1>Aloha</h1>
            <div className="container">
              <a href="https://wesdelange.github.io/Aloha/" target="_blank">
                <img src={Aloha} alt="Aloha"/>
              </a>
            </div>
            <p>Responsive webpage for mock fashion company</p>
            <a href="https://github.com/wesdelange/Aloha">View code on GitHub</a>
          </div>
          
          <div id="instanews" className="project">
            <h1>Instanews</h1>
            <div className="container">
              <a href="https://wesdelange.github.io/instanews/" target="_blank">
                <img src={Instanews} alt="Instanews"/>
              </a>
            </div>
            <p>Responsive webpage displaying today's top news stories fetched from New York Times API</p>
            <a href="https://github.com/wesdelange/instanews">View code on GitHub</a>
          </div>

          <div id="inhabitent" className="project">
            <h1>Inhabitent</h1>
            <div className="container">
              <a href="" target="_blank">
                <img src={Inhabitent} alt="Inhabitent"/>
              </a>
            </div>
            <p>Wordpress webpage with custom theme and plug-ins</p>
            <a href="https://github.com/wesdelange/inhabitent">View code on GitHub</a>
          </div>

          <div id="qod" className="project">
            <h1>Quotes-on-Dev</h1>
            <div className="container">
              <a href="" target="_blank">
                <img src={Qod} alt="Quotes-on-Dev"/>
              </a>
            </div>
            <p>Responsive Custom Wordpress webpage that utilizes Rest API to display random quotes</p>
            <a href="https://github.com/wesdelange/inhabitent">View code on GitHub</a>
          </div>

        </div>

        <h1>Adventures</h1>
        <div className="Adventures">

          
          <div className="Cycling">
            <h2>Bicycle Touring</h2>
            <p>Riding bicycles has always been a major passion in my life.
              I have completed two major touring adventures in recent years.
              In 2016 I rode from Prince Rupert, British Columbia to St.John's, Newfoundland to Toronto, Ontario.
              In 2017 I rode all across Britsih Columbia, Yukon and Alaska. Camping in the wilderness as much as possible.
            </p>
              <img src={Bike} alt="Bike"/>

          </div>

          <div className="Fishing">
            <h2>Fishing</h2>
            <p>Fishing has played a huge role in my life since a young age.
              It has taken me on crazy adventures that would otherwise be pointless.
              Fly Fishing in particular became my main focus in 2014 and decided to pursue a career guiding.
              This adventure involved working at a world class Steelhead Lodge in remote Northern BC.
            </p>
              <img src={Fish} alt="Fish"/>

          </div>
          
        </div>

      </div>// site wrapper 
    );
  }
}

export default App;
