import { BrowserRouter, Route, Routes } from "react-router-dom";

import ClientReqForm from "./components/ClientReqForm/ClientReqForm";
import FinancialReqForm from "./components/FinancialReqForm/FinancialReqForm";
import RecruitementReqForm from "./components/RecruitementReqForm/RecruitementReqForm";
import NewEventForm from "./components/NewEventForm/NewEventForm";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import FinancialView from "./components/FinancialReqForm/FinancialView";
import NewEventView from "./components/NewEventForm/NewEventView";

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import RecrutementView from "./components/RecruitementReqForm/RecrutementView";
import ClientView from "./components/ClientReqForm/ClientView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/RecrutementView" element={<RecrutementView />} />
        <Route path="/ClientView" element={<ClientView />} />
        <Route path="/FinancialView" element={<FinancialView />} />
        <Route path="/NewEventView" element={<NewEventView />} />
        <Route path="/ClientReqForm" element={<ClientReqForm />} />
        <Route path="/FinancialReqForm" element={<FinancialReqForm />} />
        <Route path="/RecruitementReqForm" element={<RecruitementReqForm />} />
        <Route path="/NewEventForm" element={<NewEventForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
