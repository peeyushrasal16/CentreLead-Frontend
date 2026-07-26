import React from "react";

function LeadTable() {
  return (
    <div className="card mt-4">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Lead List</h5>
      </div>

      <div className="card-body">

        <table className="table table-bordered table-hover">

          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Parent</th>
              <th>Child</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Source</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1</td>
              <td>Rahul Sharma</td>
              <td>Aarav Sharma</td>
              <td>9876543210</td>
              <td>New</td>
              <td>Website</td>

              <td>
                <button className="btn btn-warning btn-sm me-2">
                  Edit
                </button>

                <button className="btn btn-danger btn-sm">
                  Archive
                </button>
              </td>

            </tr>

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default LeadTable;