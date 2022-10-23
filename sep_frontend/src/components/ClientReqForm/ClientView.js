import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import { getClients } from "../../redux/actions/clientActions";

import "./ClientReqForm.css";

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
      <Link className="link1" to="/Home">
        Home
      </Link>
      <div className="financial-view ">
        {finalClientRequests?.clientrequests?.map((eachList) => {
          return (
            <Card className="eachCard">
              <Card.Body>
                <div>
                  <Card.Text>
                    preferences :
                    <Card className="eachCard1">
                      <Card.Text>
                        decorations:{eachList?.preferences?.decorations}
                      </Card.Text>
                      <Card.Text>
                        parties:{eachList?.preferences?.parties}
                      </Card.Text>
                      <Card.Text>
                        PhotosOrFilming:
                        {eachList?.preferences?.PhotosOrFilming}
                      </Card.Text>
                      <Card.Text>food:{eachList?.preferences?.food}</Card.Text>
                      <Card.Text>
                        drinks:{eachList?.preferences?.drinks}
                      </Card.Text>
                      <Card.Text>
                        computerRelatedIssues:
                        {eachList?.preferences?.computerRelatedIssues}
                      </Card.Text>
                    </Card>
                  </Card.Text>
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
      <Link className="link1" to="/Home">
        Home
      </Link>
    </div>
  );
}
