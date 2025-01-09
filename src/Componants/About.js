import React from 'react';
import "./About.css";
import profile from "./pofile3.jpeg";

export default function About() {
  return (
    <div className='about-page'>
      <h1>About me</h1>
      <div className='profile-info'>    
          <div className='about-container'>
        <img src={profile} id='profileImg'/> 
      </div>
      <div className='intro'>
        <p>Hi, <h2>I'm Deepak Sen</h2>, a passionate and detail-oriented <h2>Frontend Developer</h2> with a knack for creating visually stunning, responsive, and user-friendly web interfaces. I love turning ideas into reality through clean an exceptional user experience.<br></br><br></br> With a strong foundation in HTML5, CSS3, JavaScript and React.js, I specialize in building modern, dynamic, and interactive web applications. I believe in continuous learning and styling updated with the latest technology.</p>
      </div>
      </div>

    </div>
  )
}
