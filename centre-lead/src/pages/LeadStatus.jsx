import { useEffect, useState } from "react";
import api from "../services/api";

function LeadStatus() {

    const [statusId, setStatusId] = useState(null);
    const [statusName, setStatusName] = useState("");

    const [statuses, setStatuses] = useState([]);

    useEffect(() => {
        getStatuses();
    }, []);

    const getStatuses = () => {
        api.get("/status-lead")
            .then((response) => {
                setStatuses(response.data);
            })
            .catch((error) => console.log(error));
    };

    const saveStatus = () => {

        const status = {
            statusName
        };

        api.post("/status-lead", status)
            .then(() => {
                alert("Lead Status Added Successfully");
                clearForm();
                getStatuses();
            })
            .catch((error) => console.log(error));
    };

    const editStatus = (status) => {
        setStatusId(status.statusId);
        setStatusName(status.statusName);
    };

    const updateStatus = () => {

        const status = {
            statusName
        };

        api.put(`/status-lead/${statusId}`, status)
            .then(() => {
                alert("Lead Status Updated Successfully");
                clearForm();
                getStatuses();
            })
            .catch((error) => console.log(error));
    };

    const deleteStatus = (statusId) => {

        api.delete(`/status-lead/${statusId}`)
            .then(() => {
                alert("Lead Status Deleted Successfully");
                getStatuses();
            })
            .catch((error) => console.log(error));
    };

    const clearForm = () => {
        setStatusId(null);
        setStatusName("");
    };

    return (
        <div className="container mt-4">

            <h2>Lead Status Management</h2>

            <div className="card p-3 mb-4">

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Status Name"
                    value={statusName}
                    onChange={(e) => setStatusName(e.target.value)}
                />

                {
                    statusId == null ?

                        <button
                            className="btn btn-primary"
                            onClick={saveStatus}
                        >
                            Save
                        </button>

                        :

                        <button
                            className="btn btn-warning"
                            onClick={updateStatus}
                        >
                            Update
                        </button>

                }

            </div>

            <table className="table table-bordered">

                <thead className="table-dark">

                    <tr>
                        <th>ID</th>
                        <th>Status Name</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        statuses.map((status) => (

                            <tr key={status.statusId}>

                                <td>{status.statusId}</td>
                                <td>{status.statusName}</td>

                                <td>

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => editStatus(status)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteStatus(status.statusId)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default LeadStatus;