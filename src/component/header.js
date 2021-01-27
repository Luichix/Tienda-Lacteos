import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../assets/cheese.jpg'

function Header () {
  return (
    <div>
  <Navbar id="header" expand="lg" fixed="top">
      <img src={logo}/>
      <h1>Delicias de Quesos El Rey</h1>
  </Navbar>
  <Navbar id="navi" expand="lg" fixed="top">
    <Nav>
      <Nav.Item>
        <Nav.Link><b><h6>Inicio</h6></b></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><b><h6>Productos</h6></b></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><b><h6>Nosotros</h6></b></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><b><h6>Contacto</h6></b></Nav.Link>
      </Nav.Item>
    </Nav>  
  </Navbar>
  
  </div>
  )
}

export default Header
