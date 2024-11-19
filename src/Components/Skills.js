import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

import './Skills.css';
const Skills = () => {
  return (
    <Container fluid className="skill">
    <h2 className="text-center mb-4">SKILLS</h2>
    <Row className="g-4">
      {/* Skill Cards */}
      <Col md={3} xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/py.png" alt="Python" className="skill-image" />
        </Card>
      </Col>

      <Col md={3} xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/php.jfif" alt="PHP" className="skill-image" />
        </Card>
      </Col>

      <Col md={3} xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/html.png" alt="HTML" />
        </Card>
      </Col>

      <Col md={3}xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/css.png" alt="CSS" />
        </Card>
      </Col>

      <Col md={3}xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/js.jfif" alt="JavaScript" className="skill-image" />
        </Card>
      </Col>

      <Col md={3}xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/react.png" alt="React.js" className="skill-image" />
        </Card>
      </Col>

      <Col md={3}xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/bootstrap.png" alt="Bootstrap" className="skill-image"/>
        </Card>
      </Col>

      <Col md={3}xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/express.png" alt="Express.js"className="skill-image" />
        </Card>
      </Col>

      <Col md={3}xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/node.png" alt="Node.js"className="skill-image" />
        </Card>
      </Col>

      <Col md={3}xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/mysql.png" alt="MySQL"className="skill-image" />
        </Card>
      </Col>

      <Col md={3}xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/mongodb.jfif" alt="MongoDB"className="skill-image" />
        </Card>
      </Col>

      <Col md={3}xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/pycharm.jfif" alt="PyCharm"className="skill-image" />
        </Card>
      </Col>

      <Col md={3}xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/vs.png" alt="Visual Studio"className="skill-image" />
        </Card>
      </Col>

      <Col md={3}xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/xampp.jfif" alt="XAMPP" className="skill-image"/>
        </Card>
      </Col>

      <Col md={3}xs={4}>
        <Card className="skill-card">
          <Card.Img variant="top" src="./skill-image/git.png" alt="GitHub"className="skill-image git" />
        </Card>
      </Col>
    </Row>
  </Container>
  );
};

export default Skills;
