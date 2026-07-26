import React from "react";

function FollowUpForm() {
  return (
    <div className="card mt-4">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Add Follow Up</h5>
      </div>

      <div className="card-body">
        <form>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">Lead ID</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Lead ID"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Follow Up Date</label>
              <input
                type="datetime-local"
                className="form-control"
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Channel</label>
              <select className="form-select">
                <option>Select Channel</option>
                <option>Call</option>
                <option>WhatsApp</option>
                <option>Email</option>
                <option>Visit</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Outcome</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Outcome"
              />
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
            Save Follow Up
          </button>

        </form>
      </div>
    </div>
  );
}

export default FollowUpForm;