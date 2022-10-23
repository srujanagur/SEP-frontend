import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-main">
      <h1>SEP BUSINESS</h1>
      <div>
        <Container className="dashboard">
          <Row>
            <Col md={6}>
              {" "}
              <Link to="/Login">Login</Link>
            </Col>
            <Col md={6}>
              {" "}
              <Link to="/Register">Register</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
