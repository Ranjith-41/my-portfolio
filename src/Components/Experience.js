import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>

      {/* Internship Experience */}
      <div className="experience-item">
        <h3>Full Stack Web Developer Intern</h3>
        <p><strong>Company:</strong> Pumo Technovation, Coimbatore</p>
        <p><strong>Duration:</strong> June 2024 – Present</p>
        <ul>
          <li>Developing full-stack web applications using React.js, Express.js, Node.js, and MongoDB.</li>
          <li>Built responsive user interfaces and optimized backend performance for scalability.</li>
          <li>Collaborated on live projects, delivering dynamic and user-friendly solutions.</li>
        </ul>
      </div>

      {/* Client Project Experience */}
      <div className="experience-item">
        <h3>Client Project: Avani Smart Children's Clinic</h3>
        <p><strong>Duration:</strong> September 2024 – October 2024</p>
        <p><strong>Technologies:</strong> React.js, Node.js, Express, MongoDB</p>
        <ul>
          <li>Developed a real-time website to enhance patient engagement and streamline clinic services.</li>
          <li>Implemented responsive design for optimal viewing on different devices.</li>
          <li>Created secure user authentication for data security and access management.</li>
          <li>Managed feedback data using MongoDB for dynamic updates.</li>
          <li>Developed a notification system for real-time feedback alerts.</li>
        </ul>
      </div>

      {/* Previous Internship Experience */}
      <div className="experience-item">
        <h3>Full Stack Development Internship Program</h3>
        <p><strong>Company:</strong> AICL Training, Chennai</p>
        <p><strong>Duration:</strong> July 2022 – August 2022</p>
        <ul>
          <li>Completed a comprehensive internship program focused on full-stack development.</li>
          <li>Gained hands-on experience in building responsive websites using React.js and Node.js.</li>
          <li>Worked on collaborative projects, implementing frontend and backend components.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
