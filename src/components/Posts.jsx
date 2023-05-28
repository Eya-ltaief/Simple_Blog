import React from 'react'
import {Row, Col,Image,Button} from 'react-bootstrap'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import posts from '../data/posts.json'
import "../App.css"
const Posts = () => {
  return (
    <div className='container default-spacing'>
      <Row>
        {posts.users.map((user)=>(
            <Col key={user.id}>
                <Router>
                    <Link to={user.Link}>
                     <Image src={process.env.PUBLIC_URL+user.image} fluid  />
                 </Link>
                </Router>
                <div className='posts-spacing'>
                 <h6 className='date-spacing'>{user.date}</h6>
                 <h4 >{user.headline}</h4>
                 
                     <h6 > {user.description}</h6>
                 
                
                 {user.keywords.map((keyword, index) => (
                    <Button key={index} variant="outline-dark" className="button-spacing">{keyword}</Button>
                ))}
                </div>
            </Col>
        ))}
      </Row>
    </div>
  )
}

export default Posts