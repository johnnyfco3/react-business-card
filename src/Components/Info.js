import React from 'react'
import photo from '../images/IMG_2413.JPG'
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export function Info(){
    return(
        <div className='info'>
            <img src={photo} alt="profile pic" />
            <h1>Johnny Tejada</h1>
            <h3>Full Time Student</h3>
            <h4>johnnyfran20002@gmail.com</h4>

            <div className='buttons'>
                <button className='email'><span><FaEnvelope /></span>Email</button>
                <button className='linked'><span><FaLinkedin /></span>LinkedIn</button>
            </div>
        </div>
    );
}

export default Info;