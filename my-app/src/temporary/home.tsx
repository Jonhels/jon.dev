import React from 'react';
import './home.css';
import Jon from './img/jon.png';

function home() {
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
    </style>
    return (
        <div className="home">
            <img src={Jon} alt="Picture of jon" />
            <h1>Jon Helge Skjærstein</h1>
            <p>Content designer for  Skjærstein IT</p>
            <h2>About me</h2>
            <p>
                I am a developer and designer located in Norway, my art style is quite modern and focused around color combinations.
                The work below in the project gallery shows  mostly my recent work, go ahead and take a look so you can know more about me.
            </p>
            <h2>Key skills</h2>
            <ul>
                <li>Modern art style </li>
                <li>Multitasking</li>
                <li>Teamwork </li>
                <li>Attention to details</li>
                <li>Experienced with Figma</li>
                <li>React expirience</li>
            </ul>
            <div className='Slider'>

            </div>
        </div>
    );
}

export default home;
