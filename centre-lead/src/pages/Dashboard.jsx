import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {

    const [dashboard, setDashboard] = useState({

        totalLeads: 0,
        activeLeads: 0,
        convertedLeads: 0,
        lostLeads: 0,
        todayFollowUps: 0

    });

    useEffect(() => {

        getDashboard();

    }, []);

    const getDashboard = () => {

        api.get("/dashboard")

            .then((response) => {

                setDashboard(response.data);

            })

            .catch((error) => console.log(error));

    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">Dashboard</h2>

            <div className="row">

                <div className="col-md-4 mb-3">

                    <div className="card text-white bg-primary">

                        <div className="card-body">

                            <h5>Total Leads</h5>

                            <h2>{dashboard.totalLeads}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card text-white bg-success">

                        <div className="card-body">

                            <h5>Active Leads</h5>

                            <h2>{dashboard.activeLeads}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card text-white bg-info">

                        <div className="card-body">

                            <h5>Converted Leads</h5>

                            <h2>{dashboard.convertedLeads}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-6 mb-3">

                    <div className="card text-white bg-danger">

                        <div className="card-body">

                            <h5>Lost Leads</h5>

                            <h2>{dashboard.lostLeads}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-6 mb-3">

                    <div className="card text-white bg-warning">

                        <div className="card-body">

                            <h5>Today's Follow Ups</h5>

                            <h2>{dashboard.todayFollowUps}</h2>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;