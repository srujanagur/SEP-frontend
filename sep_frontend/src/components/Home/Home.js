import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

import "./Home.css";
export default function Home() {
  return (
    <div className="home">
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <Nav.Link href="/NewEventForm">NewEvent</Nav.Link>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                <Dropdown.Item href="/NewEventForm">NewEventForm</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <Nav.Link href="/RecruitementReqForm">Recruitement</Nav.Link>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                <Dropdown.Item href="/RecruitementReqForm">
                  RecruitementReqForm
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <Nav.Link href="/FinancialReqForm">Financial</Nav.Link>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                <Dropdown.Item href="/FinancialReqForm">
                  FinancialReqForm
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <Nav.Link href="/ClientReqForm">Client</Nav.Link>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                <Dropdown.Item href="/ClientReqForm">
                  ClientReqForm
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
