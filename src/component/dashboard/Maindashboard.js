import React from 'react'
import arrow from '../../Assets/dashboard/arrow.png';


const Maindashboard = () => {
    return (
        <div className="recent-notes">
            <div className="top">
                <span className="first">Recent Notes</span>
                <span>More <img src={arrow} alt="" /></span>
            </div>
            <ul className="body">
                <li>Unit 5 - Technology</li>
                <li>Unit 5 - Technology</li>
                <li>Unit 5 - Technology</li>
                <li>Unit 5 - Technology</li>
            </ul>
        </div>
    )
}

export default Maindashboard
