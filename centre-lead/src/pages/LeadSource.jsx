import { useEffect, useState } from "react";
import api from "../services/api";

function LeadSource() {

    const [sourceId, setSourceId] = useState(null);
    const [sourceName, setSourceName] = useState("");

    const [sources, setSources] = useState([]);

    useEffect(() => {
        getSources();
    }, []);

    const getSources = () => {
        api.get("/source-lead")
            .then((response) => {
                setSources(response.data);
            })
            .catch((error) => console.log(error));
    };

    const saveSource = () => {

        const source = {
            sourceName
        };

        api.post("/source-lead", source)
            .then(() => {
                alert("Lead Source Added Successfully");
                clearForm();
                getSources();
            })
            .catch((error) => console.log(error));
    };

    const editSource = (source) => {
        setSourceId(source.sourceId);
        setSourceName(source.sourceName);
    };

    const updateSource = () => {

        const source = {
            sourceName
        };

        api.put(`/source-lead/${sourceId}`, source)
            .then(() => {
                alert("Lead Source Updated Successfully");
                clearForm();
                getSources();
            })
            .catch((error) => console.log(error));
    };

    const deleteSource = (sourceId) => {

        api.delete(`/source-lead/${sourceId}`)
            .then(() => {
                alert("Lead Source Deleted Successfully");
                getSources();
            })
            .catch((error) => console.log(error));
    };

    const clearForm = () => {
        setSourceId(null);
        setSourceName("");
    };

    return (
        <div className="container mt-4">

            <h2>Lead Source Management</h2>

            <div className="card p-3 mb-4">

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Source Name"
                    value={sourceName}
                    onChange={(e) => setSourceName(e.target.value)}
                />

                {
                    sourceId == null ?

                        <button
                            className="btn btn-primary"
                            onClick={saveSource}
                        >
                            Save
                        </button>

                        :

                        <button
                            className="btn btn-warning"
                            onClick={updateSource}
                        >
                            Update
                        </button>

                }

            </div>

            <table className="table table-bordered">

                <thead className="table-dark">

                    <tr>
                        <th>ID</th>
                        <th>Source Name</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        sources.map((source) => (

                            <tr key={source.sourceId}>

                                <td>{source.sourceId}</td>
                                <td>{source.sourceName}</td>

                                <td>

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => editSource(source)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteSource(source.sourceId)}
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

export default LeadSource;