import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getEvents } from "../../redux/actions/eventActions";

import Card from "react-bootstrap/Card";

import "./NewEventForm.css";

export default function NewEventView() {
  const finalevents = useSelector((state) => state.eventReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);
  const requiredevents = finalevents.events;

  return (
    <div>
      <h1>Events Details</h1>
      <div className="event-view">
        {requiredevents.map((eachList) => {
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
