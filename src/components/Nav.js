import React, { useState, useEffect } from 'react';
import'./Nav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function BasicExample() {

  const [atBottom, setAtBottom] = useState(true);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const bodyHeight = document.body.offsetHeight;

    // Check if we're at the bottom of the page
    if (windowHeight + scrollY >= bodyHeight) {
      setAtBottom(false);
    } else {
      setAtBottom(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navbarStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: '1000',
    transition: 'transform 0.3s ease-in-out',
    transform: atBottom ? 'translateY(0)' : 'translateY(-100%)',
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={navbarStyle}>
      <Container>
        <Navbar.Brand href="#home" className='dream'>Dream<span className='logo-right'>Sync</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav flex-grow-0 d-flex justify-content-end">
          <Nav className=" d-flex justify-content-end m-0 ">
          <Link className='from-home' to={"/"}>
            <Nav.Link href="#home" className='nav_link'>Home</Nav.Link>
          </Link>
          <Link className='from-home' to={"/event"}>
            <Nav.Link href="/event" className='nav_link'>Events</Nav.Link>
          </Link>
          <Link className='from-home' to={"/blogs"}>
            <Nav.Link href="#link" className='nav_link'>Blogs</Nav.Link>
          </Link>
          <Link className='from-home' to={"/connect"}>
            <Nav.Link href="#link" className='nav_link'>Connection</Nav.Link>
          </Link>
          <Link className='from-home' to={"/join"}>
          <Nav.Link href="#link" className='nav_link'>Join Us</Nav.Link>
          </Link>

            
           
            
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;