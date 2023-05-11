import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./Main.css";

export default function Main() {
  return (
    <div class="container-main">
      <div class="container">
        <Container>
          <div className="login-content">
            <h4>SEP BUSINESS</h4>
            <p>Hello!!! Welcome!</p>
            <p>
              Only Administration manager will be able to register other
              employees.
            </p>
            <Row>
              <Link to="/Login">Login</Link>
            </Row>
            <Row>
              <Link to="/Register">Register</Link>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
