import React from 'react'
import { Nav } from 'react-bootstrap'
import Logout from '../LoginComp/Logout'

const Siddebar = () => {
  return (
    <div className='sidebar'>
        <div className='d-flex flex-column align-items-center justify-content-between mt-4'>
            <div>
                <i class="fa-solid fa-microchip fa-beat-fade fa-xs" style={{color: "ffffff", marginLeft:"30px"}}></i>
                <h4>Spot IT   </h4>
            </div>
             <br/>
             <br/>
            <div>
                <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link href="/" className="sidebar-link"><i class="fa-solid fa-chart-simple" style={{ marginRight:"10px"}}></i>Dashboard</Nav.Link>
                    <Nav.Link href="/" className="sidebar-link"><i class="fa-sharp fa-solid fa-note-sticky"style={{ marginRight:"10px"}}></i>Posts</Nav.Link>
                    <Nav.Link href="/" className="sidebar-link"><i class="fa-regular fa-window-maximize" style={{ marginRight:"10px"}}></i>Resources</Nav.Link>
                    <Nav.Link href="/" className="sidebar-link"><i class="fa-solid fa-gears"style={{ marginRight:"10px"}}></i>Settings</Nav.Link>
                </Nav>
                
            </div>
        
            <div className='logout-button '>
               <Logout/>
            </div>
        </div>
       
    </div>
  )
}

export default Siddebar