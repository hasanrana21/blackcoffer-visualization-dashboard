import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="d-flex align-items-start dashboard-area">
            <div className="nav dashboard-sidebar flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <h1>Visualization</h1>
                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"> Dashboard </button>
                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
            </div>

            <div className="tab-content dashboard-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Dashboard</div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> Profile lorem3000 </div>
            </div>
        </div>

    );
};

export default Dashboard;