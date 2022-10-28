import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/actions/userActions";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

import "./Home.css";
import Button from "react-bootstrap/esm/Button";

export default function Home() {
  const dispatch = useDispatch();
  const logoutSubmit = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
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
                <Dropdown.Item href="/NewEventView">View</Dropdown.Item>
                <Dropdown.Item href="/NewEventForm">NewEventForm</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <Nav.Link href="/RecruitementReqForm">Recruitement</Nav.Link>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/RecrutementView">View</Dropdown.Item>
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
                <Dropdown.Item href="/FinancialView">View</Dropdown.Item>
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
                <Dropdown.Item href="/ClientView">View</Dropdown.Item>
                <Dropdown.Item href="/ClientReqForm">
                  ClientReqForm
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Button variant="light" onClick={logoutSubmit}>
              logout
            </Button> */}

            <Nav.Link href="/">logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
