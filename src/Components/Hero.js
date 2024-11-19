import React from 'react';
import {Col,Row} from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
  <div>
    
    <section className="hero"> 
        <div className="cnt">
        <h1>Hi, I'm <span id="name">Ranjith</span></h1>
      <p>Full Stack Web Developer</p>
      <a href="https://drive.google.com/file/d/1-ISddLSm846TTGYSt_UF1ChPAxwuLVDS/view?usp=drivesdk" className="btn" id="hire">Hire me</a>
      <a href="projects" className="btn btn-primary" id="work">View My Work</a>
      </div>   
     
    </section>


   
    </div>
  );
};

export default Hero;
