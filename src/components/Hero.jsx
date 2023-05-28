import React from 'react'
import {Image, Row, Col} from 'react-bootstrap'
import heroImg from '../asset/herosSection.jpg'
import "../App.css"
const Hero = () => {
  return (
    <div className='container default-spacing' >
        <Row className="justify-content-center">
            <Col style={{ display: 'flex', justifyContent: 'center' }}>
                <Image  src={heroImg}  fluid  style={{height:"80vh", width:"130vh"}} className='align-items-center'/>
            </Col>
        </Row>
        
    </div>
  )
}

export default Hero