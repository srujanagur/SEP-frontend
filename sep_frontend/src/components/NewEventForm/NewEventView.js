import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

import "./NewEventForm.css";

export default function NewEventView() {
  const [eventViewList, seteventViewList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/newEvents")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("hi");
        console.log(data.events[0]);
        console.log("hello");
        console.log(data.events[0].clientName);
        seteventViewList(data);
      });
  }, []);

  return (
    <div>
      <h1>Events Details</h1>
      <div className="event-view">
        {eventViewList.events.map((eachList) => {
          return (
            <Card className="eachCard">
              <Card.Body>
                <div>
                  <Card.Title>Event Details:</Card.Title>
                  <Card.Text>clientName : {eachList.clientName}</Card.Text>
                  <Card.Text>eventType: {eachList.eventType}</Card.Text>
                  <Card.Text>
                    from: {eachList.from}
                    {"  "} to: {eachList.to}
                  </Card.Text>
                  <Card.Text>
                    expectedNumOfAttendees: {eachList.expectedNumOfAttendees}
                  </Card.Text>
                  <Card.Text>
                    expectedBudget: {eachList.expectedBudget}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <Link className="link" to="/Home">
        Home
      </Link>
    </div>
  );
}
