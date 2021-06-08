import React from 'react'
import '../Mycss/Dashboard.css'
import profile from '../Assets/dashboard/Ellipse 1.png';
import backlogo from '../Assets/dashboard/fi-rr-sign-out 1.png';
import object from '../Assets/dashboard/OBJECT 1.png'

const Dashboard = () => {
    return (
        <div className="dashboard grid">
            <div className="menu"></div>
            <div className="middle"></div>


            <div className="profile">
                <div className="top-profile">
                    <span>logout</span>
                    <span><img className="image" src={backlogo} alt="" /></span>
                </div>
                <img src={profile} alt="" />
                <div className="name">Sadia Tasnim</div>
                <div className="status">Student</div>
            </div>


            <div className="welcome-back">
                <ul>
                    <li><img className="" src={object}  alt="" /></li>
                    <li><p>Welcome back Anna!</p></li>
                    <li><p>You’ve learned 80% of your goal this week!</p></li>
                </ul>
            </div>

        </div>
    )
}

export default Dashboard
