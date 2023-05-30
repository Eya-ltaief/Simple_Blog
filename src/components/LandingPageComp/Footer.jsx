import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav'
const Footer = () => {
  return (
    <div className='parent-footer'>
    <Card className='footer'>
      <Card.Header style={{backgroundColor:"black", height:"10vh"}}><h5  style={{color: "white", marginTop:"12px"}}>Spot IT
        <i class="fa-solid fa-microchip fa-beat-fade fa-xs" style={{color: "white", marginLeft:"8px"}}></i></h5>
      </Card.Header>
      <Card.Body className='footer-body'  >
        <div className="d-flex flex-column justify-content-center align-items-center footer-link">
            <h5>Stay updated</h5>
            <h5>Subscribe to our newsletter</h5>
            <Form.Control  className="footer-form"type="text" placeholder="Enter your email" />
        </div>
        <br/>
        <div className="d-flex justify-content-around align-items-center footer-link">
            <div>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#home">Overview</Nav.Link>
                <Nav.Link href="#home">Features</Nav.Link>
            </div>
             <div>
                 <Nav.Link href="#about">About us </Nav.Link>
                <Nav.Link href="#about">News </Nav.Link>
                <Nav.Link href="#about">Contact </Nav.Link>
             </div>
             <div>
                 <Nav.Link href="#services">Resources</Nav.Link>
                 <Nav.Link href="#services">Newsletter</Nav.Link>
                 <Nav.Link href="#services">Events</Nav.Link>
             </div>
              
        </div>
   
      </Card.Body>
    </Card>
 </div>
  )
}

export default Footer