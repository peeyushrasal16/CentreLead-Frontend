import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Centre from "./pages/Centre";
import Owner from "./pages/Owner";
import LeadStatus from "./pages/LeadStatus";
import LeadSource from "./pages/LeadSource";
import Lead from "./pages/Lead";
import FollowUp from "./pages/FollowUp";

function App() {
  return (
    <>
      <Navbar />

      <div className="d-flex">

        <Sidebar />

        <div className="container-fluid p-4">

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/centre" element={<Centre />} />

            <Route path="/owner" element={<Owner />} />

            <Route path="/leadstatus" element={<LeadStatus />} />

            <Route path="/leadsource" element={<LeadSource />} />

            <Route path="/lead" element={<Lead />} />

            <Route path="/followup" element={<FollowUp />} />

          </Routes>

        </div>

      </div>
    </>
  );
}

export default App;