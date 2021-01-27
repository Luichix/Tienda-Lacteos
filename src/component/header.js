import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/cheese.jpg'
import { useStateValue } from '../redux/StateProvider';
import { auth } from '../database/firebase'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

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
  <Navbar id="navi" expand="lg" fixed="top" className="bg-light justify-content-between">
    <Nav id="nav-rigth">
      <Nav.Item >
        <Nav.Link><span className='header_optionNav'>Inicio</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><span className='header_optionNav'>Tienda</span></Nav.Link>
      </Nav.Item>
    </Nav> 
    <Nav id="nav-left">
      <Nav.Item>
        <Nav.Link>
          <Link to={!user && '/login'}>
              <div onClick={handleAuthentication} className="header_option">
                  <span className='header_optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                  <span className='header_optionLineTwo'> {user ?  'Sign Out' : 'Sign In'} </span>
              </div>
          </Link>
          </Nav.Link>
      </Nav.Item >
      <Nav.Item>
        <Nav.Link>
          <Link to='/checkout'>
              <div className='header_optionBasket'>
                  <ShoppingBasketIcon/>
                  <span className='header_optionLineTwo header_basketCount'>{basket?.length} </span>
              </div>
          </Link>
        </Nav.Link>
      </Nav.Item>
      </Nav>
  </Navbar>
  </div>
  )
}

export default Header
