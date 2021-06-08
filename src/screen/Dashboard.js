import React from 'react'
import '../Mycss/Dashboard.css'
import profile from '../Assets/dashboard/Ellipse 1.png';
import backlogo from '../Assets/dashboard/fi-rr-sign-out 1.png';
import object from '../Assets/dashboard/OBJECT 1.png'
import Reminder from '../Assets/dashboard/reminder.png'
import message from '../Assets/dashboard/message.png'
import arrow from '../Assets/dashboard/arrow.png'
const Dashboard = () => {
    return (
        <div className="dashboard grid">
            {/* Menu */}
            <div className="menu">
                <h1>menu</h1>
            </div>
            {/* menu */}

            {/* middle */}
            <div className="middle">
                <div className="recent-notes">
                    <div className="top">
                        <span>Recent Notes</span>
                        <span>More <img src={arrow} alt="" /></span>
                    </div>
                    <div className="body">
                        <h4>Unit 5 - Technology</h4>
                        <h4>Unit 5 - Technology</h4>
                        <h4>Unit 5 - Technology</h4>
                    </div>
                </div>
            </div>

            {/* middle */}
            <div className="profile-info">
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
                        <li><h3>Welcome back Anna!</h3></li>
                        <li><p>You’ve learned 80% of your goal this week!</p></li>
                    </ul>
                </div>

                <div className="reminders">
                    <div className="top">
                        <span>Reminders</span>
                        <span><img src={Reminder} alt="" /></span>
                    </div>
                    <ul className="body">
                        <li className="logo"><img src={message} alt="" /></li>
                        <li className="title-and-date">
                            <div className="title">Eng - Vocabulary test</div>
                            <div className="date">24 Sep 2019, Firday</div>
                        </li>
                    </ul>

                    <ul className="body">
                        <li className="logo"><img src={message} alt="" /></li>
                        <li className="title-and-date">
                            <div className="title">Eng - Vocabulary test</div>
                            <div className="date">24 Sep 2019, Firday</div>
                        </li>
                    </ul>
                    <ul className="body">
                        <li className="logo"><img src={message} alt="" /></li>
                        <li className="title-and-date">
                            <div className="title">Eng - Vocabulary test</div>
                            <div className="date">24 Sep 2019, Firday</div>
                        </li>
                    </ul>
                    <ul className="body">
                        <li className="logo"><img src={message} alt="" /></li>
                        <li className="title-and-date">
                            <div className="title">Eng - Vocabulary test</div>
                            <div className="date">24 Sep 2019, Firday</div>
                        </li>
                    </ul>
                    <ul className="body">
                        <li className="logo"><img src={message} alt="" /></li>
                        <li className="title-and-date">
                            <div className="title">Eng - Vocabulary test</div>
                            <div className="date">24 Sep 2019, Firday</div>
                        </li>
                    </ul>
                    <ul className="body">
                        <li className="logo"><img src={message} alt="" /></li>
                        <li className="title-and-date">
                            <div className="title">Eng - Vocabulary test</div>
                            <div className="date">24 Sep 2019, Firday</div>
                        </li>
                    </ul>
                    <ul className="body">
                        <li className="logo"><img src={message} alt="" /></li>
                        <li className="title-and-date">
                            <div className="title">Eng - Vocabulary test</div>
                            <div className="date">24 Sep 2019, Firday</div>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Dashboard
