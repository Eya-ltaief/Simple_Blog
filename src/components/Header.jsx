import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css'
import {useAuth0} from '@auth0/auth0-react'

function BasicExample() {
  const {loginWithRedirect} = useAuth0()
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{color:"#ffffff"}}>SPOT  IT 
        <i class="fa-solid fa-microchip fa-beat-fade fa-xs" style={{color: "ffffff", marginLeft:"8px"}}></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"  style={{color:"#ffffff"}}>Home</Nav.Link>
            <Nav.Link href="#link"  style={{color:"#ffffff"}}>Posts</Nav.Link>
             <Nav.Link href="#link"  style={{color:"#ffffff"}}>Resources</Nav.Link>
           
          </Nav>
          <Nav style={{ display: 'flex', alignItems: 'center' }}>
            <Nav.Link classnName="text-center"  style={{color:"#ffffff"}} onClick={()=>loginWithRedirect()}>Sign up</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;