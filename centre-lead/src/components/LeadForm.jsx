import React from "react";

function LeadForm() {
  return (
    <>
    <div className="card shadow">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Add Lead</h5>
      </div>

      <div className="card-body">
        <form>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Parent Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Parent Name"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Child Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Child Name"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Child Age</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Child Age"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone Number"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Centre</label>
              <select className="form-select">
                <option>Select Centre</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Owner</label>
              <select className="form-select">
                <option>Select Owner</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Lead Status</label>
              <select className="form-select">
                <option>Select Status</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Lead Source</label>
              <select className="form-select">
                <option>Select Source</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Next Follow Up</label>
              <input
                type="datetime-local"
                className="form-control"
              />
            </div>

            <div className="col-12 mb-3">
              <label className="form-label">Notes</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter Notes"
              ></textarea>
            </div>

          </div>

          <button className="btn btn-primary">
            Save Lead
          </button>

        </form>
      </div>
    </div>
    </>
  );
}

export default LeadForm;