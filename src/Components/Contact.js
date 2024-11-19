import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="cnt1">
    <div>
      <h1 id="contact1" className="text-center">Get in Touch</h1>
    </div>
  
    <section id="contact" className="text-center mt-4">
      <p>
        <i className="fas fa-envelope"></i> 
        <a href="mailto:ranjithkittusamy@gmail.com" className="text-decoration-none text-light"> ranjithkittusamy@gmail.com</a>
      </p>
      <p>
        <i className="fas fa-phone"></i> 
        <a href="tel:+916380550065" className="text-decoration-none text-light"> 6380550065</a>
      </p>
      <p>
        <i className="fas fa-map-marker-alt"></i> 
        14/3, KLS Nagar, Pollachi, Tamil Nadu, India
      </p>
  
      <div className="social-icons mt-4">
      <a href="https://www.linkedin.com/in/ranjith-k-773055203" target="_blank" rel="noopener noreferrer" className="mx-2">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/Ranjith-41" target="_blank" rel="noopener noreferrer" className="mx-2">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/_.ranjith._41_/profilecard/?igsh=dnh5OTR1a2c3ajBi" target="_blank" rel="noopener noreferrer" className="mx-2">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
       
      </div>
    </section>
  </div>
  
  );
};

export default Contact;
