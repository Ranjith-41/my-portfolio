import React from 'react';
import {Col,Row} from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div>
    <section className="about">
        
    <Row>
    <Col lg={3} xs={3}>
      <div className="me">
      <img id="me-photo" alt="Ranjith" src="./image/me2.png"/>
      </div>  
      </Col>
      <Col lg={9} xs={9}>
      
       <div className="abt">
      <h1 id="h1">About<span id="one">Me</span> </h1>      
      <p id="p">
        I am a Full Stack Web Developer with expertise in React.js, Node.js, Express.js, and MongoDB. I have hands-on experience in building responsive, user-friendly applications and have collaborated on real-time projects to deliver scalable solutions.
      </p>
      
     
   
      </div>
     
      </Col>
      
    </Row>
    <Row>
      <Col lg={12} xs={12}>
      <section className="one">
      <div>
        <h1 id="h2">Looking to bring your vision online?</h1>
        <p id="p2"> I'm here to craft stunning, responsive websites that deliver seamless user experiences. Whether it's a sleek personal portfolio or a robust business platform, I specialize in creating digital solutions tailored to your needs. Let's transform your ideas into a digital masterpiece that sets your brand apart and drives real results. Your vision, my expertise—let's build something amazing together.</p>
      </div>

      </section>
      
      </Col>
    </Row>
    </section>
    </div>
  );
};

export default About;
