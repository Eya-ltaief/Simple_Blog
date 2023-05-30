import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Siddebar from "../components/dashboardComponents/Siddebar";
import SidebarR from "../components/dashboardComponents/SidebarR";
import AddPost from "../components/dashboardComponents/AddPost";

const Profile = () => {
  const { isAuthenticated } = useAuth0();


  return (
    isAuthenticated && (
      <div className="d-flex user-profile">
        <Siddebar/>
        <AddPost/>
        <SidebarR/>
      </div>
    )
  );
};

export default Profile;