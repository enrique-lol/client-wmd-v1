import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link href="#/">Home</Nav.Link>
//   </Fragment>
// )

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      waiv
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
