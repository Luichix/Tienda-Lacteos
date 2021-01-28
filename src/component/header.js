import React from 'react'
import logo from '../assets/cheese.jpg'
import { useStateValue } from '../redux/StateProvider';
import { auth } from '../database/firebase'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import PlaceIcon from '@material-ui/icons/Place';

function Header () {
  const [{basket, user}, dispatch] = useStateValue()

  const handleAuthentication = () => {
      if (user) {
          auth.signOut();
      }
  }
  return (
    <div>
  <Navbar id="header" expand="lg" fixed="top">
      <img src={logo}/>
      <h1>Delicias de Quesos El Rey</h1>
  </Navbar>
  <Navbar id="navi" expand="lg" fixed="top" className="justify-content-between">
      <span className="nav_ref"><PlaceIcon/> Hotel Glomar 3 1/2 cuadras al sur. Chinandega, Nicaragua</span>
  </Navbar>
  </div>
  )
}

export default Header
