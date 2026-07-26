import { useEffect, useState } from "react";
import api from "../services/api";

function FollowUp() {

    const [followUpId, setFollowUpId] = useState(null);

    const [leadId, setLeadId] = useState("");

    const [followUpDateTime, setFollowUpDateTime] = useState("");

    const [channel, setChannel] = useState("");

    const [outcome, setOutcome] = useState("");

    const [notes, setNotes] = useState("");

    const [nextFollowUpDate, setNextFollowUpDate] = useState("");

    const [leads, setLeads] = useState([]);

    const [followUps, setFollowUps] = useState([]);

    useEffect(() => {

        getLeads();

    }, []);

    const getLeads = () => {

    api.get("/lead?page=0&size=100")

        .then((response) => {

            setLeads(response.data.content);

        })

        .catch((error) => console.log(error));

};

const getFollowUps = (id) => {

    api.get(`/follow-ups/lead/${id}`)

        .then((response) => {

            setFollowUps(response.data);

        })

        .catch((error) => console.log(error));

};

const handleLeadChange = (e) => {

    const id = e.target.value;

    setLeadId(id);

    if(id){

        getFollowUps(id);

    }

};

// ---------------- SAVE FOLLOW UP ----------------

const saveFollowUp = () => {

    const followUp = {

        leadId,
        followUpDateTime,
        channel,
        outcome,
        notes,
        nextFollowUpDate

    };

    api.post("/follow-ups", followUp)

        .then(() => {

            alert("Follow Up Added Successfully");

            clearForm();

            getFollowUps(leadId);

        })

        .catch((error) => console.log(error));

};


// ---------------- CLEAR FORM ----------------

const clearForm = () => {

    setFollowUpId(null);

    setFollowUpDateTime("");

    setChannel("");

    setOutcome("");

    setNotes("");

    setNextFollowUpDate("");

};

return (

    <div className="container mt-4">

        <h2 className="mb-4">Follow Up Management</h2>

        <div className="card p-4 mb-4">

            <div className="row">

                <div className="col-md-6 mb-3">

                    <label>Lead</label>

                    <select
                        className="form-select"
                        value={leadId}
                        onChange={handleLeadChange}
                    >

                        <option value="">Select Lead</option>

                        {
                            leads.map((lead) => (

                                <option
                                    key={lead.leadId}
                                    value={lead.leadId}
                                >

                                    {lead.parentName} - {lead.phone}

                                </option>

                            ))
                        }

                    </select>

                </div>

                <div className="col-md-6 mb-3">

                    <label>Follow Up Date</label>

                    <input
                        type="datetime-local"
                        className="form-control"
                        value={followUpDateTime}
                        onChange={(e)=>setFollowUpDateTime(e.target.value)}
                    />

                </div>

                <div className="col-md-6 mb-3">

                    <label>Channel</label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Call / WhatsApp / Visit"
                        value={channel}
                        onChange={(e)=>setChannel(e.target.value)}
                    />

                </div>

                <div className="col-md-6 mb-3">

                    <label>Outcome</label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Interested"
                        value={outcome}
                        onChange={(e)=>setOutcome(e.target.value)}
                    />

                </div>

                <div className="col-md-12 mb-3">

                    <label>Notes</label>

                    <textarea
                        className="form-control"
                        rows="3"
                        value={notes}
                        onChange={(e)=>setNotes(e.target.value)}
                    />

                </div>

                <div className="col-md-6 mb-3">

                    <label>Next Follow Up</label>

                    <input
                        type="datetime-local"
                        className="form-control"
                        value={nextFollowUpDate}
                        onChange={(e)=>setNextFollowUpDate(e.target.value)}
                    />

                </div>

                <div className="col-md-12">

                    <button
                        className="btn btn-primary"
                        onClick={saveFollowUp}
                    >

                        Save Follow Up

                    </button>

                </div>

            </div>

        </div>

        <h4>Follow Up History</h4>

        <table className="table table-bordered table-striped">

            <thead className="table-dark">

                <tr>

                    <th>ID</th>
                    <th>Date</th>
                    <th>Channel</th>
                    <th>Outcome</th>
                    <th>Notes</th>
                    <th>Next Follow Up</th>

                </tr>

            </thead>

            <tbody>

                {

                    followUps.map((followUp)=>(

                        <tr key={followUp.followUpId}>

                            <td>{followUp.followUpId}</td>

                            <td>{followUp.followUpDateTime}</td>

                            <td>{followUp.channel}</td>

                            <td>{followUp.outcome}</td>

                            <td>{followUp.notes}</td>

                            <td>{followUp.nextFollowUpDate}</td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    </div>
);
}

export default FollowUp;