import React from 'react'
import { Image } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
const SidebarR = () => {
     const { user, isAuthenticated } = useAuth0();

  return (
     isAuthenticated && (
    <div className="right-bar d-flex flex-column align-items-center">
        <Image src={user.picture} roundedCircle  className="user-profile-image mt-4" alt={user.name} />
        <h5>{user.name}</h5>
        <p>{user.email}</p>
    </div>
  )
  )
}

export default SidebarR