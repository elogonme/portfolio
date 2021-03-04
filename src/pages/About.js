import React, { useEffect, useState } from "react";
import Skills from "../components/Skills";
import light from '../images/eldar.png';
import dark from '../images/giphy.gif';

function About(props) {
  const [face, setFace] = useState(light);
  useEffect(() => {
    setFace(toggleFace())
  }, [props.theme]);

  function toggleFace() {
    if (props.theme === 'dark') setTimeout(() => setFace(light), 1000);
    
    return props.theme === 'light' ? light : dark
  }
  return (
    <div className="container main">
      <div className="row">
        <div className="card mt-4 col-lg-8 col-xs-12 shadow">
          <div className="card-body">
            <h2 className="card-title border-bottom pb-2 text-info animate__animated animate__fadeIn"><i className="far fa-address-card mr-2 text-secondary"></i>About Me:
              <span className="text-secondary"> Eldar Humbatov</span>
            </h2>
            <img src={face} width="230" height="230" 
            className="card-img-left mx-2 float-sm-left img-fluid mx-auto d-block animate__animated animate__zoomIn face" 
              alt="Eldar Humbattov" />
            <p className="card-text animate__animated animate__fadeIn">I am Full Stack Developer with an engineering 
              background and extensive skills in coding, electronics 
              and troubleshooting computer operated systems. I am studying to earn certificate from University of Toronto in full stack 
              development including use of JavaScript, CSS, React.js, and responsive web design for one-page Web Applications. 
              I have transferred my troubleshooting and professional skills from an agile offshore oil industry work environment along 
              with passion for problem solving into a challenging and demanding development industry. I have also worked on several 
              projects involving Graphics Design and Video Editing. <br />I am passionate about programming and logical thinking. 
              Love to make things work, find bugs and correct. I enjoy working with team, collaborating with others to create functioning 
              cutting-edge product sharpening my skills. I am excited about developer’s role as it always keeps you challenged and gets 
              you constantly learn new technologies and solutions.</p>
          </div>
          <div className="card-footer bg-transparent d-flex flex-column flex-sm-row justify-content-around">
            <a href="mailto:eldarha@gmail.com" target="_blank" rel="noreferrer" title="E-mail" className="text-info col-xs-12">
              <i className="far fa-envelope text-secondary mr-1"></i>
              eldarha@gmail.com
            </a>
            <a href="tel:+1-416-823-4666" className="text-info col-xs-12">
              <i className="fas fa-phone-square text-secondary mr-1"></i>
              +1-416-823-4666
            </a>
            <a href={process.env.PUBLIC_URL +"/assets/doc/EldarHumbatov_Resume.pdf"} target="_blank" rel="noreferrer" className="text-info col-xs-12">
              <i className="far fa-file-alt text-secondary mr-1"></i>
              Resume
            </a>

          </div>
        </div>
        <Skills />
      </div>
    </div>
  );
}

export default About;
