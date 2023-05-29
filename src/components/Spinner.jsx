import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
const   Loading = () => {
  return (
    <div  className="d-flex align-items-center justify-content-center " style={{ height: '100vh' }}>
        <Spinner animation="border" className='spinner'/>
    </div>
  )
}

export default Loading