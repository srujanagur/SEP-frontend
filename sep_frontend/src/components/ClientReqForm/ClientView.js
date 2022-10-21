import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function ClientView() {
  const [clientViewList, setClientViewList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/FinancialRequests")
      .then((response) => response.json())
      .then((data) => {
        console.log("data" + data);
        console.log("hi");
        console.log(data.finRequests[0]);
        console.log("hello");
        console.log(data.finRequests[0].RequestingDepartment);
        setClientViewList(data);
      });
  }, []);
  return <div>ClientView</div>;
}
