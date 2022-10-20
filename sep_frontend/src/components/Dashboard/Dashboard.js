import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-main">
      <h1>SEP BUSINESS</h1>
      <div className="dashboard">
        <Button variant="secondary">
          <Link to="/Login">Login</Link>
        </Button>
        <Button variant="secondary">
          <Link to="/Register">Register</Link>
        </Button>
      </div>
    </div>
  );
}
