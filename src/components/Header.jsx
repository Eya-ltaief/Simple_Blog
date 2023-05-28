import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import '@fortawesome/fontawesome-free/css/all.min.css'


function BasicExample() {
  const navbarStyle = {
    backgroundColor: 'dark',
    color: 'white',
  }
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{color:"#ffffff"}}>SPOT  IT 
        <i class="fa-solid fa-microchip fa-beat-fade fa-xs" style={{color: "ffffff", marginLeft:"8px"}}></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Posts</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav style={{ display: 'flex', alignItems: 'center' }}>
            <Nav.Link href="#deets" classnName="text-center">Log In</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button variant="dark">Sign up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;