import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

export default function RecrutementView() {
  //   const [recruitementViewList, setRecuritementViewList] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:5000/api/v1/recReqs")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log("hi");
        console.log(data.recReqs[0]);
        console.log("hello");
        console.log(data.recReqs[0].RequestingDepartment);

        // setRecuritementViewList(data);
      });
  }, []);
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
