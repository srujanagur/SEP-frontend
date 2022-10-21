import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "react-bootstrap/Card";

import "./FinancialReqForm.css";

export default function FinancialView() {
  const [financialViewList, setFinancialViewList] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://127.0.0.1:5000/api/v1/FinancialRequests"
      );

      setFinancialViewList(result.data.finRequests);
    };

    fetchData();
  }, [financialViewList]);
  console.log(financialViewList);

  return (
    <div>
      <div className="financial-view">
        {financialViewList?.map((eachList) => {
          return (
            <Card className="eachCard">
              <Card.Body>
                <div>
                  <Card.Title>
                    RequestingDepartment: {eachList?.RequestingDepartment}
                  </Card.Title>
                  <Card.Text>
                    projectReference: {eachList?.projectReference}
                  </Card.Text>
                  <Card.Text>
                    requiredAmount: {eachList?.requiredAmount}
                  </Card.Text>
                  <Card.Text>reason: {eachList?.reason}</Card.Text>
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
