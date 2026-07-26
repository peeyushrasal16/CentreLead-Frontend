import { useEffect, useState } from "react";
import api from "../services/api";

function Centre() {

    const [centreId, setCentreId] = useState(null);
    const [centreName, setCentreName] = useState("");
    const [city, setCity] = useState("");

    const [centres, setCentres] = useState([]);

    useEffect(() => {
        getCentres();
    }, []);

    const getCentres = () => {
        api.get("/centres")
            .then((response) => {
                setCentres(response.data);
            })
            .catch((error) => console.log(error));
    };

    const saveCentre = () => {

        const centre = {
            centreName,
            city
        };

        api.post("/centres", centre)
            .then(() => {
                alert("Centre Added Successfully");
                clearForm();
                getCentres();
            })
            .catch((error) => console.log(error));
    };

    const editCentre = (centre) => {
        setCentreId(centre.centreId);
        setCentreName(centre.centreName);
        setCity(centre.city);
    };

    const updateCentre = () => {

        const centre = {
            centreName,
            city
        };

        api.put(`/centres/${centreId}`, centre)
            .then(() => {
                alert("Centre Updated Successfully");
                clearForm();
                getCentres();
            })
            .catch((error) => console.log(error));
    };

    const deleteCentre = (centreId) => {

        api.delete(`/centres/${centreId}`)
            .then(() => {
                alert("Centre Deleted Successfully");
                getCentres();
            })
            .catch((error) => console.log(error));
    };

    const clearForm = () => {
        setCentreId(null);
        setCentreName("");
        setCity("");
    };

    return (
        <div className="container mt-4">

            <h2>Centre Management</h2>

            <div className="card p-3 mb-4">

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Centre Name"
                    value={centreName}
                    onChange={(e) => setCentreName(e.target.value)}
                />

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                {
                    centreId == null ?

                        <button
                            className="btn btn-primary"
                            onClick={saveCentre}
                        >
                            Save
                        </button>

                        :

                        <button
                            className="btn btn-warning"
                            onClick={updateCentre}
                        >
                            Update
                        </button>
                }

            </div>

            <table className="table table-bordered">

                <thead className="table-dark">

                    <tr>
                        <th>ID</th>
                        <th>Centre Name</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {
                        centres.map((centre) => (

                            <tr key={centre.centreId}>

                                <td>{centre.centreId}</td>
                                <td>{centre.centreName}</td>
                                <td>{centre.city}</td>

                                <td>

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => editCentre(centre)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteCentre(centre.centreId)}
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

export default Centre;