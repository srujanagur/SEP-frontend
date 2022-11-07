import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Main from './components/main/Main'
import Register from './components/register/Register'
import Login from './components/login/Login'
import NewEvent from './components/newEvent/NewEvent'
import FinReqForm from './components/financialRequest/createFinReq'
import NewEventForm from './components/newEvent/newEventForm'
import FinancialView from './components/financialRequest/FinRequests'
import RecReqView from './components/recReq/recReq'
import RecReqForm from './components/recReq/createRecReq'
import ClientReqView from './components/clientReq/ClientReq'
import ClientReqForm from './components/clientReq/CreateClientReq'
import ApprovedEvents from './components/newEvent/ApprovedEvents'


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Main />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/NewEvents' element={<NewEvent />} />
        <Route path='/ApprovedEvents' element={<ApprovedEvents />} />
        <Route path='/NewEventForm' element={<NewEventForm />} />
        <Route path='/FinReqForm' element={<FinReqForm />} />
        <Route path='/FinReqs' element={<FinancialView />} />
        <Route path='/RecReqs' element={<RecReqView />} />
        <Route path='/NewRecReq' element={<RecReqForm />} />
        <Route path='/ClientRequests' element={<ClientReqView />} />
        <Route path='/NewClientRequest' element={<ClientReqForm/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
