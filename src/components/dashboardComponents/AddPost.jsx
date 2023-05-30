import React from 'react'
import { Image, Col, Row } from 'react-bootstrap'
import heroImg from '../../asset/herosSection.jpg'
const AddPost = () => {
  return (
    <div className='d-flex flex-column dashboard-addpost'>
        <div className='d-flex justify-content-around mt-4'>
            <h5>Add your post</h5>
            <i class="fa-solid fa-plus"></i>
        
        </div>
        <div>
            <Row className='d-flex flex-column align-items-center justify-content-center mt-4'>
                <Col className='d-flex flex-column align-items-center justify-content-center'>
                    <Col >
                        <Image src={heroImg} className='dashboard-post-img' fluid />
                    </Col>
                    <Col className='d-flex align-items-center justify-content-between mt-4'>
                        <Col>
                            <Image src={heroImg} className='dashboard-secondpost-img' fluid />
                        </Col>
                        <Col>
                        <Image src={heroImg} className='dashboard-secondpost-img' fluid />
                        </Col>
                    </Col>
                </Col>             
            </Row>
        </div>
        
    </div>
  )
}

export default AddPost