import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.svg'
const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
          <Link to="/" style={{textDecoration: "none"}}>
        <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Money Tips
      </Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link ><Link to="/" style={{ textDecoration: "none",color: "inherit"}}>Home</Link></Nav.Link>
            <Nav.Link ><Link to="/aboutus" style={{ textDecoration: "none",color: "inherit"}}>About Us</Link></Nav.Link>
            <Nav.Link ><Link to="/blogs"style={{ textDecoration: "none",color: "inherit"}}>Blogs</Link></Nav.Link>
            <Nav.Link ><Link to="/contactus" style={{ textDecoration: "none",color: "inherit"}}>Contact Us</Link></Nav.Link>
            <Nav.Link ><Link to="/News" style={{ textDecoration: "none",color: "inherit"}}>News</Link></Nav.Link>
            <Nav.Link ><Link to="/coins" style={{ textDecoration: "none",color: "inherit"}}>Cryptocurrency</Link></Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
    )
}

export default NavBar
