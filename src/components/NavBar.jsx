import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
 
const NavBar = () => {
  return (
<Navbar bg="dark" variant="dark" expand="lg">
<Container>
<Navbar.Brand as={Link} to="/">MyReactApp</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="me-auto">
<Nav.Link as={Link} to="/">Home</Nav.Link>
<Nav.Link as={Link} to="/produto">Produto</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
  )
}
 
export default NavBar