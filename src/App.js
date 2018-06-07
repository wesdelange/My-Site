import React, { Component } from 'react';
import './App.css';
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
          <nav className="nav-menu">
            <a>About</a>
            <a>Portfolio</a>
            <a>Adventures</a>
            <a>Contact</a>
          </nav>
        </header>
        
        <div className="About"> 
          <h1>About Me</h1>
          <h2>Currently studying Web Development at RED Academy</h2>
          <p className="My-intro">
              My journey into the world of web development has just begun.
              A strong desire to learn new skills and expand my realm of competence has lead me to RED Academy.
              Looking to break into the exciting Tech Industry as a Jr Front-End Web Developer.
              Extremely interested in exploring Artificial Intelligence and Deep Learning as well as the emerging science of complexity.
              My work experiences include being a Fly-Fishing Guide, Dog-Sledding Guide, Carpenter, Fisheries Technician and Bicycle Courier.
              Major accomplishments in my life include following my passion of adventure and completing two 10000km+ solo bicycle touring trips.
              In 2016 I cycled across Canada from the Prince Rupert, BC to St.John's, NFLD and back to Toronto, ON.
              The next summer I biked all over BC and the Yukon, as well as a huge chunk of Alaska.
              I am currently acquiring the necessary skills to further my competence in the digital world.
              I also enjoy philosophy and have fun attempting to grasp the true nature of reality in my spare time.
              I enjoy staying fit and eating healthy while constantly working at self actualization.
          </p>
        </div>

        
        <div className="My-portfolio">
        <h1>Portfolio</h1>
          
          <div  id="aloha" className="project">
            <h2>Aloha</h2>
            <div className="container">
              <a href="https://wesdelange.github.io/Aloha/" target="_blank">
                <img src={Aloha} alt="Aloha"/>
              </a>
            </div>
            <h3>Responsive webpage for mock fashion company</h3>
            <a href="https://github.com/wesdelange/Aloha">View code on GitHub</a>
          </div>
          
          <div id="instanews" className="project">
            <h2>Instanews</h2>
            <div className="container">
              <a href="https://wesdelange.github.io/instanews/" target="_blank">
                <img src={Instanews} alt="Instanews"/>
              </a>
            </div>
            <h3>Responsive webpage displaying today's top news stories fetched from New York Times API</h3>
            <a href="https://github.com/wesdelange/instanews">View code on GitHub</a>
          </div>

          <div id="inhabitent" className="project">
            <h2>Inhabitent</h2>
            <div className="container">
              <a href="" target="_blank">
                <img src={Inhabitent} alt="Inhabitent"/>
              </a>
            </div>
            <h3>Wordpress webpage with custom theme and plug-ins</h3>
            <a href="https://github.com/wesdelange/inhabitent">View code on GitHub</a>
          </div>

          <div id="qod" className="project">
            <h2>Quotes-on-Dev</h2>
            <div className="container">
              <a href="" target="_blank">
                <img src={Qod} alt="Quotes-on-Dev"/>
              </a>
            </div>
            <h3>Responsive Custom Wordpress webpage that utilizes Rest API to display random quotes</h3>
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

        <footer className="Site-footer">
          <h1>Contact</h1>
          <h2>By Phone: 416-333-6416</h2>
          <h2>By Email: wes.delange@gmail.com</h2>
        </footer>

      </div>// site wrapper 
    );
  }
}

export default App;
