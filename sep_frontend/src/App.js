import { BrowserRouter, Route, Routes } from "react-router-dom";

import ClientReqForm from "./components/ClientReqForm/ClientReqForm";
import FinancialReqForm from "./components/FinancialReqForm/FinancialReqForm";
import RecruitementReqForm from "./components/RecruitementReqForm/RecruitementReqForm";
import NewEventForm from "./components/NewEventForm/NewEventForm";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ClientReqForm" element={<ClientReqForm />} />
        <Route path="/FinancialReqForm" element={<FinancialReqForm />} />
        <Route path="/RecruitementReqForm" element={<RecruitementReqForm />} />
        <Route path="/NewEventForm" element={<NewEventForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
