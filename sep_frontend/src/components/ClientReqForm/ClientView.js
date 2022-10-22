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
  // console.log(
  //   "from view gvr" +
  //     JSON.stringify(finalClientRequests.clientrequests.clientRequests)
  // );
  const requiredClientRequests =
    finalClientRequests.clientrequests.clientRequests;
  //
  const yyy = finalClientRequests.clientrequests;
  console.log("ganesh1 " + JSON.stringify(yyy));
  // console.log("xxxxxxxxxx1234" + yyy[0]);

  var obj = JSON.parse(yyy);
  // console.log(eachList.clientName);

  // console.log(eachList.description);

  // console.log(eachList.expectedNumOfAttendees);
  // console.log(eachList.eventType);
  //});

  const person = {
    success: true,
    clientReqCount: 10,
    clientRequests: [
      {
        preferences: {
          decorations: "Flower",
          parties: "NA",
          food: "Soft food",
          drinks: "NA",
          computerRelatedIssues: "NA",
          photosOrFilming: "Interested in more of candid photography",
        },
        _id: "635040891eb547603a882e54",
        recordNumber: 5,
        clientName: "Diana",
        eventType: "Birthday",
        description: "50th birthday",
        expectedNumOfAttendees: 20,
        plannedBudget: 5000,
        from: "2022-12-15T18:21:33.193Z",
        to: "2022-12-16T18:21:33.193Z",
        otherNeeds: "NA",
        status: "Initial Approval",
        createdAt: "2022-10-19T18:23:05.708Z",
        __v: 0,
      },
      {
        preferences: {
          decorations: "Flower",
          parties: "NA",
          food: "Soft food",
          drinks: "NA",
          computerRelatedIssues: "NA",
          photosOrFilming: "Interested in more of candid photography",
        },
        _id: "635041471eb547603a882e56",
        recordNumber: 5,
        clientName: "Diana",
        eventType: "Birthday",
        description: "50th birthday",
        expectedNumOfAttendees: 20,
        plannedBudget: 5000,
        from: "2022-12-15T18:21:33.193Z",
        to: "2022-12-16T18:21:33.193Z",
        otherNeeds: "NA",
        status: "Initial Approval",
        createdAt: "2022-10-19T18:26:15.635Z",
        __v: 0,
      },
      {
        preferences: {
          decorations: "Flower",
          parties: "NA",
          food: "Soft food",
          drinks: "NA",
          computerRelatedIssues: "NA",
          photosOrFilming: "Interested in more of candid photography",
        },
        _id: "6350414a1eb547603a882e58",
        recordNumber: 5,
        clientName: "Diana",
        eventType: "Birthday",
        description: "50th birthday",
        expectedNumOfAttendees: 20,
        plannedBudget: 5000,
        from: "2022-12-15T18:21:33.193Z",
        to: "2022-12-16T18:21:33.193Z",
        otherNeeds: "NA",
        status: "Initial Approval",
        createdAt: "2022-10-19T18:26:18.017Z",
        __v: 0,
      },
      {
        preferences: {
          decorations: "Flower",
          parties: "NA",
          food: "Soft food",
          drinks: "NA",
          computerRelatedIssues: "NA",
          photosOrFilming: "Interested in more of candid photography",
        },
        _id: "6350414b1eb547603a882e5a",
        recordNumber: 5,
        clientName: "Diana",
        eventType: "Birthday",
        description: "50th birthday",
        expectedNumOfAttendees: 20,
        plannedBudget: 5000,
        from: "2022-12-15T18:21:33.193Z",
        to: "2022-12-16T18:21:33.193Z",
        otherNeeds: "NA",
        status: "Initial Approval",
        createdAt: "2022-10-19T18:26:19.142Z",
        __v: 0,
      },
      {
        preferences: {
          decorations: "Flower",
          parties: "NA",
          food: "Soft food",
          drinks: "NA",
          computerRelatedIssues: "NA",
          photosOrFilming: "Interested in more of candid photography",
        },
        _id: "635041a0b7b7b94daeae58f8",
        recordNumber: 5,
        clientName: "Diana",
        eventType: "Birthday",
        description: "50th birthday",
        expectedNumOfAttendees: 20,
        plannedBudget: 5000,
        from: "2022-12-15T18:21:33.193Z",
        to: "2022-12-16T18:21:33.193Z",
        otherNeeds: "NA",
        status: "Initial Approval",
        createdAt: "2022-10-19T18:27:44.923Z",
        __v: 0,
      },
      {
        preferences: {
          decorations: "Flower",
          parties: "NA",
          food: "Soft food",
          drinks: "NA",
          computerRelatedIssues: "NA",
          photosOrFilming: "Interested in more of candid photography",
        },
        _id: "635041a3b7b7b94daeae58fa",
        recordNumber: 5,
        clientName: "Diana",
        eventType: "Birthday",
        description: "50th birthday",
        expectedNumOfAttendees: 20,
        plannedBudget: 5000,
        from: "2022-12-15T18:21:33.193Z",
        to: "2022-12-16T18:21:33.193Z",
        otherNeeds: "NA",
        status: "Initial Approval",
        createdAt: "2022-10-19T18:27:47.100Z",
        __v: 0,
      },
      {
        preferences: {
          decorations: "Flower",
          parties: "NA",
          food: "Soft food",
          drinks: "NA",
          computerRelatedIssues: "NA",
          photosOrFilming: "Interested in more of candid photography",
        },
        _id: "635041a3b7b7b94daeae58fc",
        recordNumber: 5,
        clientName: "Diana",
        eventType: "Birthday",
        description: "50th birthday",
        expectedNumOfAttendees: 20,
        plannedBudget: 5000,
        from: "2022-12-15T18:21:33.193Z",
        to: "2022-12-16T18:21:33.193Z",
        otherNeeds: "NA",
        status: "Initial Approval",
        createdAt: "2022-10-19T18:27:47.625Z",
        __v: 0,
      },
      {
        preferences: {
          decorations: "Flower",
          parties: "NA",
          food: "Soft food",
          drinks: "NA",
          computerRelatedIssues: "NA",
          photosOrFilming: "Interested in more of candid photography",
        },
        _id: "635041c5a54343c14e77c885",
        recordNumber: 5,
        clientName: "Diana",
        eventType: "Birthday",
        description: "50th birthday",
        expectedNumOfAttendees: 20,
        plannedBudget: 5000,
        from: "2022-12-15T18:21:33.193Z",
        to: "2022-12-16T18:21:33.193Z",
        otherNeeds: "NA",
        status: "Initial Approval",
        createdAt: "2022-10-19T18:28:21.849Z",
        __v: 0,
      },
      {
        preferences: {
          decorations: "Flower",
          parties: "NA",
          food: "Soft food",
          drinks: "NA",
          computerRelatedIssues: "NA",
          photosOrFilming: "Interested in more of candid photography",
        },
        _id: "635041c7a54343c14e77c887",
        recordNumber: 5,
        clientName: "Diana",
        eventType: "Birthday",
        description: "50th birthday",
        expectedNumOfAttendees: 20,
        plannedBudget: 5000,
        from: "2022-12-15T18:21:33.193Z",
        to: "2022-12-16T18:21:33.193Z",
        otherNeeds: "NA",
        status: "Initial Approval",
        createdAt: "2022-10-19T18:28:23.753Z",
        __v: 0,
      },
    ],
  };

  return (
    <div>
      <h1>Client Request Details:</h1>
      {/* {Object.values(ggh).map((x) => {
        return (
          <div>
            <Card className="eachCard">
              <Card.Text>recordNumber : {x.clientName}</Card.Text>
            </Card>
          </div>
        );
      })} */}

      <div className="event-view">
        {Object.values(person.clientRequests).map((eachList) => {
          return (
            <Card className="eachCard">
              <Card.Body>
                <div>
                  <Card.Title>Client Request Details:</Card.Title>
                  <Card.Text>recordNumber : {eachList.recordNumber}</Card.Text>
                  <Card.Text>clientName : {eachList.clientName}</Card.Text>
                  <Card.Text>description : {eachList.description}</Card.Text>
                  <Card.Text>
                    expectedNumOfAttendees : {eachList.expectedNumOfAttendees}
                  </Card.Text>
                  <Card.Text>
                    plannedBudget : {eachList.plannedBudget}
                  </Card.Text>
                  <Card.Text>eventType: {eachList.eventType}</Card.Text>
                  <Card.Text>
                    from: {eachList.from}
                    {"  "} to: {eachList.to}
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
