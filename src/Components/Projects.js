import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'; 
import './Projects.css';

const Projects = () => {
  return (
    <Container fluid className="project">
  <h2 className="text-center mb-4">PROJECTS</h2>

  <Row className="g-4">

  <Col md={4}>
      <Card className="project-card">
        {/* Image */}
        <Card.Img variant="top" src="./project-image/avani.png" alt="Avani Smart Children's Clinic Website" className="project-image" />

        {/* Hover Content */}
        <div className="card-hover-content">
          <Card.Body>
            <Card.Title>Avani Smart Children's Clinic Website</Card.Title>
            <Card.Text>
              Real-time website using React.js, Node.js, Express, and MongoDB for a children's clinic.
            </Card.Text>
            <a href="https://avanismartchildrensclinic.netlify.app/" className="btn btn-primary">VISIT NOW!</a>
          </Card.Body>
        </div>
      </Card>
    </Col>


      {/* HomeChef Website */}
      <Col md={4}>
        <Card className=" project-card">
          <Card.Img variant="top" src="./project-image/homechef.png" alt="HomeChef Website" className="project-image" />
          <div className="card-hover-content">
            <Card.Body>
              <Card.Title>HomeChef Website</Card.Title>
              <Card.Text>
                Designed a responsive website using HTML, CSS, JavaScript, and Bootstrap for a small restaurant.
              </Card.Text>
              <a href="https://homechefforyou.netlify.app/" className="btn btn-primary">VISIT NOW!</a>
            </Card.Body>
          </div>
        </Card>
      </Col>

      {/* CRUD Application */}
      <Col md={4}>
        <Card className=" project-card">
          <Card.Img variant="top" src="./project-image/crud.png" alt="CRUD Application" className="project-image" />
          <div className="card-hover-content">
            <Card.Body>
              <Card.Title>CRUD Application</Card.Title>
              <Card.Text>
                Developed using PHP and MySQL for seamless database management and basic CRUD operations.
              </Card.Text>
              <a href="https://github.com/Ranjith-41/CRUD-APPLICATION" className="btn btn-primary">VISIT NOW!</a>
            </Card.Body>
          </div>
        </Card>
      </Col>


  </Row>

</Container>

  );
};

export default Projects;
