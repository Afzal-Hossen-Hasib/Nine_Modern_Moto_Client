import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [Expanded, setExpanded] = useState(false);

  return (
    <div>
      <Nav defaultActiveKey="/home" className="flex-column">
      <Outlet></Outlet>
        <Nav.Link as={Link} to="/dashboard/myorder">
          My Order
        </Nav.Link>
        <Nav.Link as={Link} to="/dashboard/addreview">Add Review</Nav.Link>
      </Nav>
    </div>
  );
};

export default Dashboard;
