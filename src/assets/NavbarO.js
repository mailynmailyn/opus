import classes from "./NavbarO.module.scss"
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const NavbarM = () => {
    return <Navbar className = {classes.nav} bg="light" expand="lg">
    <Container>
      <h1 className = {classes.nav__logo}> opus </h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className= {classes.nav__options}>
          <Nav.Link as= {Link} to = "/about">about</Nav.Link>
          <Nav.Link as= {Link} to = "/homepage">search</Nav.Link>
          <Nav.Link as= {Link} to = "/login">login/sign up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
};

export default NavbarM;