import React from 'react'
import'./Nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='dream'>Dream<span className='logo-right'>Sync</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav flex-grow-0 d-flex justify-content-end">
          <Nav className=" d-flex justify-content-end m-0 ">
            <Nav.Link href="#home" className='nav_link'>Home</Nav.Link>
            <Nav.Link href="#link" className='nav_link'>Events</Nav.Link>
            <Nav.Link href="#link" className='nav_link'>Blogs</Nav.Link>
            <Nav.Link href="#link" className='nav_link'>Connection</Nav.Link>
            <Nav.Link href="#link" className='nav_link'>Join Us</Nav.Link>


            {/* <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Connection
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">About us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Join us
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;