import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import chat from '../Assets/dashboard/chat.png';
import classes from '../Assets/dashboard/classes.png';
import profile from '../Assets/dashboard/Ellipse 1.png';
import backlogo from '../Assets/dashboard/fi-rr-sign-out 1.png';
import home from '../Assets/dashboard/home.png';
import message from '../Assets/dashboard/message.png';
import object from '../Assets/dashboard/OBJECT 1.png';
import Reminder from '../Assets/dashboard/reminder.png';
import settings from '../Assets/dashboard/settings.png';
import Chat from '../component/dashboard/Chat';
import Classes from '../component/dashboard/Classes';
import Maindashboard from '../component/dashboard/Maindashboard';
import Settings from '../component/dashboard/Settings';
import '../Mycss/Dashboard.css';







const Dashboard = () => {
    const [style, setStyle] = useState('hide-nav')
    const [buttonState, setButtonState] = useState('');
    const [showPage, setShowPage] = useState('dashboard')
    const [hideNavButton, setHidenavButton] = useState(false);

    const handleclick = (e) => {
        if(style ==='show-nav'){
            setStyle('hide-nav')
            setButtonState('change')
        }else if(style == 'hide-nav'){
            setStyle('show-nav')
            setButtonState('container')
        }else{
            return null
        }
    }



    // useEffect(()=>{
    //     if(window.innerWidth > 620){
    //         setStyle('show-nav')
    //         setHidenavButton(true);
    //         // const navbutton = window.document.getElementById('navbutton');
    //         // navbutton.style.display="none"
    //     }else{
    //         setHidenavButton(false)
    //     }
        
    // },[hideNavButton, window.innerWidth, setHidenavButton])

    const handleChange = ()=> {
        if(window.innerWidth > 620){
            setStyle('show-nav');
            setHidenavButton(true)
        }
    }

    return (
        <div onChange={handleChange} className="dashboard grid">
            {/* Menu */}
            <div className="menu">
                <nav className={`${style} for-mid-screen`}>
                    <ul>
                        <li onClick={()=> setShowPage('dashboard')}>
                            <div className="logo"><img src={home} alt="" srcset="" /></div>
                            <div className="name">Dashboard</div>
                        </li>
                        <li onClick={()=> setShowPage('classes')}>
                            <div className="logo"><img src={classes} alt="" srcset="" /></div>
                            <div className="name">Clasess</div>
                        </li>
                        <li onClick={()=> setShowPage('chat')}>
                            <div className="logo"><img src={chat} alt="" srcset="" /></div>
                            <div className="name">chat</div>
                        </li>
                        <li onClick={()=>setShowPage('settings')}>
                            <div className="logo"><img src={settings} alt="" srcset="" /></div>
                            <div className="name">Setting</div>
                        </li>

                    </ul>
                </nav>
                <nav>
                    <button 
                        className={hideNavButton ? 'show-it' : 'hide-it for-mid-screen'}
                        onClick={handleclick}
                    >
                        click
                    </button>
                </nav>
            </div>
            {/* menu */}

            {/* middle */}
                {/* show specific file by button click */}
            <div className="middle">
                {showPage === 'settings' && <Settings />}
                {showPage === 'dashboard' && <Maindashboard />}
                {showPage === 'chat' && <Chat />}
                {showPage === 'classes' && <Classes />}
            </div>

            {/* middle */}

            <div className="profile-info">
                <div className="profile">
                    <div className="top-profile">
                        <span>logout</span>
                        <span><Link to="/"><img className="image" src={backlogo} alt="" /> </Link></span>
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
