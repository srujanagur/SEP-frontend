import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import { getClients } from "../../redux/actions/clientActions";

export default function ClientView() {
  const finalClientRequests = useSelector(
    (state) => state.clientRequestReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);
  console.log(finalClientRequests);

  return (
    <div>
      <h1>Client Request Details:</h1>
      <div className="event-view">
        {finalClientRequests?.clientrequests?.map((eachList) => {
          return (
            <Card className="eachCard">
              <Card.Body>
                <div>
                  <Card.Title>Client Request Details:</Card.Title>
                  <Card.Text>recordNumber : {eachList?.recordNumber}</Card.Text>
                  <Card.Text>clientName : {eachList?.clientName}</Card.Text>
                  <Card.Text>description : {eachList?.description}</Card.Text>
                  <Card.Text>
                    expectedNumOfAttendees : {eachList?.expectedNumOfAttendees}
                  </Card.Text>
                  <Card.Text>
                    plannedBudget : {eachList?.plannedBudget}
                  </Card.Text>
                  <Card.Text>eventType: {eachList?.eventType}</Card.Text>
                  <Card.Text>
                    from: {eachList?.from}
                    {"  "} to: {eachList?.to}
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
