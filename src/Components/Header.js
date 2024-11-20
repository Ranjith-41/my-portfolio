import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavClick = () => {
    setExpanded(false); // Close the toggle menu
  };

  return (
    <Navbar expand="lg" expanded={expanded} className="navbar fixed-top">
      <Container>
        <Navbar.Brand id="brand" as={Link} to="/" onClick={handleNavClick}>
          RANJITH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" onClick={handleToggle}>
</Navbar.Toggle>


        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick}>
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" onClick={handleNavClick}>
              SKILLS
            </Nav.Link>
            <Nav.Link as={Link} to="/experience" onClick={handleNavClick}>
              EXPERIENCE
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={handleNavClick}>
              PROJECTS
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
