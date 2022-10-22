import React from "react";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getFinancialRequests } from "../../redux/actions/finRecRequestActions";

import Card from "react-bootstrap/Card";

import "./FinancialReqForm.css";

export default function FinancialView() {
  const finalFinancialRequests = useSelector((state) => state.finReqReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFinancialRequests());
  }, [dispatch]);
  console.log(finalFinancialRequests);

  return (
    <div>
      <div className="financial-view">
        {finalFinancialRequests.financialrequests.map((eachList) => {
          return (
            <Card className="eachCard">
              <Card.Body>
                <div>
                  <Card.Title>
                    RequestingDepartment: {eachList.RequestingDepartment}
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
