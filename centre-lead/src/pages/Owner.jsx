import { useEffect, useState } from "react";
import api from "../services/api";

function Owner() {

    const [ownerId, setOwnerId] = useState(null);
    const [ownerName, setOwnerName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [owners, setOwners] = useState([]);

    useEffect(() => {
        getOwners();
    }, []);

    const getOwners = () => {
        api.get("/owners")
            .then((response) => {
                setOwners(response.data);
            })
            .catch((error) => console.log(error));
    };

    const saveOwner = () => {

        const owner = {
            ownerName,
            phone,
            email
        };

        api.post("/owners", owner)
            .then(() => {
                alert("Owner Added Successfully");
                clearForm();
                getOwners();
            })
            .catch((error) => console.log(error));
    };

    const editOwner = (owner) => {
        setOwnerId(owner.ownerId);
        setOwnerName(owner.ownerName);
        setPhone(owner.phone);
        setEmail(owner.email);
    };

    const updateOwner = () => {

        const owner = {
            ownerName,
            phone,
            email
        };

        api.put(`/owners/${ownerId}`, owner)
            .then(() => {
                alert("Owner Updated Successfully");
                clearForm();
                getOwners();
            })
            .catch((error) => console.log(error));
    };

    const deleteOwner = (ownerId) => {

        api.delete(`/owners/${ownerId}`)
            .then(() => {
                alert("Owner Deleted Successfully");
                getOwners();
            })
            .catch((error) => console.log(error));
    };

    const clearForm = () => {
        setOwnerId(null);
        setOwnerName("");
        setPhone("");
        setEmail("");
    };

    return (
        <div className="container mt-4">

            <h2>Owner Management</h2>

            <div className="card p-3 mb-4">

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Owner Name"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                />

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {
                    ownerId == null ?

                        <button
                            className="btn btn-primary"
                            onClick={saveOwner}
                        >
                            Save
                        </button>

                        :

                        <button
                            className="btn btn-warning"
                            onClick={updateOwner}
                        >
                            Update
                        </button>

                }

            </div>

            <table className="table table-bordered">

                <thead className="table-dark">

                    <tr>
                        <th>ID</th>
                        <th>Owner Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {

                        owners.map((owner) => (

                            <tr key={owner.ownerId}>

                                <td>{owner.ownerId}</td>
                                <td>{owner.ownerName}</td>
                                <td>{owner.phone}</td>
                                <td>{owner.email}</td>

                                <td>

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => editOwner(owner)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteOwner(owner.ownerId)}
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

export default Owner;