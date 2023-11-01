import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarPanel = () => {
  return (
    <Navbar expand="lg" bg="light">
    <Container fluid>
      <Navbar.Brand href="#">Redux Cart</Navbar.Brand>
        <Nav>
          <Nav.Link to="/" as={Link}>Product</Nav.Link>
        </Nav>
        <Navbar.Toggle  />
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text><Nav.Link to="/cart" as={Link}>My Bag</Nav.Link></Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarPanel