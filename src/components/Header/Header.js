import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from './../../waiv-logo.png'

// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link href="#/">Home</Nav.Link>
//   </Fragment>
// )

const Header = ({ user }) => (
  <Navbar bg="#f00000" variant="dark" expand="md">
    <Navbar.Brand href="#">
      <img className='logo-image'src={logo} />
    </Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
