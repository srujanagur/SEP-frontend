import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar1 = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      sx={{
        position: "fixed",
        top: "0vh",
        width: "100%",
      }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <NavDropdown title="New Event" id="basic-nav-dropdown">
              <NavDropdown.Item href="/NewEvents">View all</NavDropdown.Item>
              <NavDropdown.Item href="/NewEventForm">Create</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Client Request" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ClientRequests">
                View all
              </NavDropdown.Item>
              <NavDropdown.Item href="/NewClientRequest">
                Create
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Financial Request" id="basic-nav-dropdown">
              <NavDropdown.Item href="/FinReqs">View all</NavDropdown.Item>
              <NavDropdown.Item href="/FinReqForm">Create</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Recruitment Request" id="basic-nav-dropdown">
              <NavDropdown.Item href="/RecReqs">View all</NavDropdown.Item>
              <NavDropdown.Item href="/NewRecReq">Create</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
