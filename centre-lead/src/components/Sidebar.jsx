import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-light border-end"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <div className="p-3">
        <h5 className="text-center mb-4">Menu</h5>

        <div className="list-group">

          <Link to="/" className="list-group-item list-group-item-action">
            Dashboard
          </Link>

          <Link to="/centre" className="list-group-item list-group-item-action">
            Centres
          </Link>

          <Link to="/owner" className="list-group-item list-group-item-action">
            Owners
          </Link>

          <Link
            to="/leadstatus"
            className="list-group-item list-group-item-action"
          >
            Lead Status
          </Link>

          <Link
            to="/leadsource"
            className="list-group-item list-group-item-action"
          >
            Lead Source
          </Link>

          <Link to="/lead" className="list-group-item list-group-item-action">
            Leads
          </Link>

          <Link
            to="/followup"
            className="list-group-item list-group-item-action"
          >
            Follow Ups
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;