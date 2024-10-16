// import React from 'react'
// import logo from '../assets/logo (1).png'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom'; 

// function Header() {
//   return (
//     <div>
//         <Navbar bg="bg-light" data-bs-theme="dark" className='bg-light'>
//         <Container>
//           <Navbar.Brand href="/"><img src={logo} alt="Company Logo" style={{ height: '40px' }} /></Navbar.Brand>
//           <Nav className="ms-auto">
//           <Nav.Link as={Link} to="/" className='pe-5 text-dark'>HOME</Nav.Link>
//           <Nav.Link as={Link} to="/About" className='pe-5 text-dark'>ABOUT</Nav.Link>
//           <Nav.Link as={Link} to="/Services" className='pe-5 text-dark'>SERVICES</Nav.Link>
//           <Nav.Link as={Link} to="/Contact" className='pe-5 text-dark'>CONTACT</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </div>
//   )
// }

// export default Header

import React from 'react';
import logo from '../assets/logo (1).png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className='bg-light'>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Company Logo" style={{ height: '40px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className='pe-5 text-dark'>HOME</Nav.Link>
              <Nav.Link as={Link} to="/About" className='pe-5 text-dark'>ABOUT</Nav.Link>
              <Nav.Link as={Link} to="/Services" className='pe-5 text-dark'>SERVICES</Nav.Link>
              <Nav.Link as={Link} to="/Contact" className='pe-5 text-dark'>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
