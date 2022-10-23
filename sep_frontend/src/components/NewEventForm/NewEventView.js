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

  return (
    <div>
      <h1>Events Details</h1>
      <div className="event-view">
        {finalevents.events.map((eachList) => {
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
                    preferences :
                    <Card className="eachCard1">
                      <Card.Text>
                        decorations:{eachList?.preferences?.decorations}
                      </Card.Text>
                      <Card.Text>
                        parties:{eachList?.preferences.parties}
                      </Card.Text>
                      <Card.Text>
                        PhotosOrFilming:
                        {eachList?.preferences.PhotosOrFilming}
                      </Card.Text>
                      <Card.Text>food:{eachList?.preferences.food}</Card.Text>
                      <Card.Text>
                        drinks:{eachList?.preferences.drinks}
                      </Card.Text>
                      <Card.Text>
                        computerRelatedIssues:
                        {eachList?.preferences.computerRelatedIssues}
                      </Card.Text>
                    </Card>
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
