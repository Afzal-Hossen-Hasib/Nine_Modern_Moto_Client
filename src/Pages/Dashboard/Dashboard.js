import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import "./Dashboard.css";

const Dashboard = () => {

  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
      <Outlet></Outlet>
        <div className="new-nav-menu">
        {user && <Nav>
          <Nav.Link as={Link} to="/dashboard/myorder">
          My Order
        </Nav.Link>
        <Nav.Link as={Link} to="/dashboard/addreview">Add Review</Nav.Link>
          </Nav>}
        <Nav.Link as={Link} to="/dashboard/myprofile">My Profile</Nav.Link>
        {admin && <Nav>
          <Nav.Link as={Link} to="/dashboard/users">Users</Nav.Link>
          <Nav.Link as={Link} to="/dashboard/manageproduct">Manage Products</Nav.Link>
          <Nav.Link as={Link} to="/dashboard/manageorder">Manage Orders</Nav.Link>
          <Nav.Link as={Link} to="/dashboard/addaproduct">Add A Product</Nav.Link>
          </Nav>}
        </div>
      </Nav>
    </div>
  );
};

export default Dashboard;
