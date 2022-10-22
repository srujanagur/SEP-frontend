import React from "react";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import { getRecruiementRequests } from "../../redux/actions/recReqActions";

export default function RecrutementView() {
  const finalRecruiementRequests = useSelector((state) => state.recRecReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecruiementRequests());
  }, [dispatch]);
  console.log("log" + JSON.stringify(finalRecruiementRequests));

  return (
    <div>
      {/* <div className="financial-view">
        {recruitementViewList.recReqs.map((eachList) => {
          return (
            <Card className="eachCard">
              <Card.Body>
                <div>
                  <Card.Title>
                    contractType : {eachList.contractType}
                  </Card.Title>
                  <Card.Text>
                    RequestingDepartment: {eachList.RequestingDepartment}
                  </Card.Text>
                  <Card.Text>
                    yearsOfExperience: {eachList.yearsOfExperience}
                  </Card.Text>
                  <Card.Text>jobTitle: {eachList.jobTitle}</Card.Text>
                  <Card.Text>
                    jobDescription: {eachList.jobDescription}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <Link className="link" to="/Home">
        Home
      </Link> */}
    </div>
  );
}
