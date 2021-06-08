import React from 'react'
import '../Mycss/Dashboard.css'
import profile from '../Assets/dashboard/Ellipse 1.png';
import backlogo from '../Assets/dashboard/fi-rr-sign-out 1.png';

const Dashboard = () => {
    return (
        <div className="dashboard grid">
            <div className="menu"></div>
            <div className="middle"></div>


            <div className="profile">
                <div>
                    <span>logout</span>
                    <span><img src={backlogo} alt="" /></span>
                </div>
                <img src={profile} alt="" />
                <div className="name">Sadia Tasnim</div>
                <div className="status">Student</div>
            </div>

        </div>
    )
}

export default Dashboard
