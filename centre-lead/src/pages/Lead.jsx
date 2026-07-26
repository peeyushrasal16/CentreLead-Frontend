import { useEffect, useState } from "react";
import api from "../services/api";

function Lead() {

    const [leadId, setLeadId] = useState(null);

    const [parentName, setParentName] = useState("");
    const [childName, setChildName] = useState("");
    const [childAge, setChildAge] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [centreId, setCentreId] = useState("");
    const [ownerId, setOwnerId] = useState("");
    const [statusId, setStatusId] = useState("");
    const [sourceId, setSourceId] = useState("");

    const [nextFollowUpDate, setNextFollowUpDate] = useState("");
    const [notes, setNotes] = useState("");

    const [leads, setLeads] = useState([]);

    const [centres, setCentres] = useState([]);
    const [owners, setOwners] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [sources, setSources] = useState([]);

    useEffect(() => {

        getLeads();
        getCentres();
        getOwners();
        getStatuses();
        getSources();

    }, []);

    // ---------------- GET ALL LEADS ----------------

    const getLeads = () => {

    api.get("/lead")

        .then((response) => {

            setLeads(response.data.content);

        })

        .catch((error) => console.log(error));

};


    // ---------------- GET CENTRES ----------------

    const getCentres = () => {

        api.get("/centres")

            .then((response) => {

                setCentres(response.data);

            })

            .catch((error) => console.log(error));

    };


    // ---------------- GET OWNERS ----------------

    const getOwners = () => {

        api.get("/owners")

            .then((response) => {

                setOwners(response.data);

            })

            .catch((error) => console.log(error));

    };


    // ---------------- GET STATUS ----------------

    const getStatuses = () => {

        api.get("/status-lead")

            .then((response) => {

                setStatuses(response.data);

            })

            .catch((error) => console.log(error));

    };


    // ---------------- GET SOURCE ----------------

    const getSources = () => {

        api.get("/source-lead")

            .then((response) => {

                setSources(response.data);

            })

            .catch((error) => console.log(error));

    };


    // ---------------- SAVE LEAD ----------------

const saveLead = () => {

    const lead = {

        parentName,
        childName,
        childAge,
        phone,
        email,
        centreId,
        ownerId,
        statusId,
        sourceId,
        nextFollowUpDate,
        notes

    };

    api.post("/lead", lead)

        .then(() => {

            alert("Lead Added Successfully");

            clearForm();
            getLeads();

        })

        .catch((error) => console.log(error));

};


// ---------------- EDIT LEAD ----------------

const editLead = (lead) => {

    setLeadId(lead.leadId);

    setParentName(lead.parentName);
    setChildName(lead.childName);
    setChildAge(lead.childAge);

    setPhone(lead.phone);
    setEmail(lead.email);

    setCentreId(lead.centreId);
    setOwnerId(lead.ownerId);
    setStatusId(lead.statusId);
    setSourceId(lead.sourceId);

    setNextFollowUpDate(lead.nextFollowUpDate);
    setNotes(lead.notes);

};


// ---------------- UPDATE LEAD ----------------

const updateLead = () => {

    const lead = {

        parentName,
        childName,
        childAge,
        phone,
        email,
        centreId,
        ownerId,
        statusId,
        sourceId,
        nextFollowUpDate,
        notes

    };

    api.put(`/lead/${leadId}`, lead)

        .then(() => {

            alert("Lead Updated Successfully");

            clearForm();
            getLeads();

        })

        .catch((error) => console.log(error));

};


// ---------------- ARCHIVE LEAD ----------------

const archiveLead = (leadId) => {

    api.delete(`/lead/${leadId}`)

        .then(() => {

            alert("Lead Archived Successfully");

            getLeads();

        })

        .catch((error) => console.log(error));

};


// ---------------- CLEAR FORM ----------------

const clearForm = () => {

    setLeadId(null);

    setParentName("");
    setChildName("");
    setChildAge("");

    setPhone("");
    setEmail("");

    setCentreId("");
    setOwnerId("");
    setStatusId("");
    setSourceId("");

    setNextFollowUpDate("");
    setNotes("");

};


    return (

        <>
         

    <div className="container mt-4">

        <h2 className="mb-4">Lead Management</h2>

        <div className="card p-4 mb-4">

            <div className="row">

                <div className="col-md-6 mb-3">
                    <label>Parent Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Child Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Child Age</label>
                    <input
                        type="number"
                        className="form-control"
                        value={childAge}
                        onChange={(e) => setChildAge(e.target.value)}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label>Centre</label>
                    <select
                        className="form-select"
                        value={centreId}
                        onChange={(e) => setCentreId(e.target.value)}
                    >
                        <option value="">Select Centre</option>

                        {
                            centres.map((centre) => (
                                <option
                                    key={centre.centreId}
                                    value={centre.centreId}
                                >
                                    {centre.centreName}
                                </option>
                            ))
                        }

                    </select>
                </div>

                <div className="col-md-6 mb-3">
                    <label>Owner</label>
                    <select
                        className="form-select"
                        value={ownerId}
                        onChange={(e) => setOwnerId(e.target.value)}
                    >
                        <option value="">Select Owner</option>

                        {
                            owners.map((owner) => (
                                <option
                                    key={owner.ownerId}
                                    value={owner.ownerId}
                                >
                                    {owner.ownerName}
                                </option>
                            ))
                        }

                    </select>
                </div>

                <div className="col-md-6 mb-3">
                    <label>Status</label>
                    <select
                        className="form-select"
                        value={statusId}
                        onChange={(e) => setStatusId(e.target.value)}
                    >
                        <option value="">Select Status</option>

                        {
                            statuses.map((status) => (
                                <option
                                    key={status.statusId}
                                    value={status.statusId}
                                >
                                    {status.statusName}
                                </option>
                            ))
                        }

                    </select>
                </div>

                <div className="col-md-6 mb-3">
                    <label>Source</label>
                    <select
                        className="form-select"
                        value={sourceId}
                        onChange={(e) => setSourceId(e.target.value)}
                    >
                        <option value="">Select Source</option>

                        {
                            sources.map((source) => (
                                <option
                                    key={source.sourceId}
                                    value={source.sourceId}
                                >
                                    {source.sourceName}
                                </option>
                            ))
                        }

                    </select>
                </div>

                <div className="col-md-6 mb-3">
                    <label>Next Follow Up</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        value={nextFollowUpDate}
                        onChange={(e) => setNextFollowUpDate(e.target.value)}
                    />
                </div>

                <div className="col-md-12 mb-3">
                    <label>Notes</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </div>

                <div className="col-md-12">

                    {
                        leadId == null ?

                            <button
                                className="btn btn-primary"
                                onClick={saveLead}
                            >
                                Save Lead
                            </button>

                            :

                            <button
                                className="btn btn-warning"
                                onClick={updateLead}
                            >
                                Update Lead
                            </button>

                    }

                </div>

            </div>

        </div>

        <table className="table table-bordered table-striped">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>Parent</th>
                    <th>Child</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Action</th>

                </tr>

            </thead>

            <tbody>

                {

                    leads.map((lead) => (

                        <tr key={lead.leadId}>

                            <td>{lead.leadId}</td>
                            <td>{lead.parentName}</td>
                            <td>{lead.childName}</td>
                            <td>{lead.phone}</td>
                            <td>{lead.statusId}</td>

                            <td>

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => editLead(lead)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => archiveLead(lead.leadId)}
                                >
                                    Archive
                                </button>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    </div>

);
        </>

    );

}

export default Lead;