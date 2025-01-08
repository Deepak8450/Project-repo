import React from 'react'
import "./Project.css";
import ProjectImg1 from "./Screenshot (16).png";
import ProjectImg2 from "./Screenshot (17).png";

export default function Projects() {
  return (
    <div className='Project'>
      <h1>Projects</h1>
      <div className='project-container'>
        <div className='projectImg'>
           <img src={ProjectImg1} className='projectImg' />
           <img src={ProjectImg2} className='projectImg' />
        </div>
        <div className='project-description'>
         <p>DailyMandi is an online platform designed for the seamless buying and selling of vegetables and grains. it connects farmers, wholesalers, and consumers, providing a digital marketplace to ensure fresh produce and grains reach buyers effciently.<br></br><a href='https://deepak8450.github.io/DailyMondyRepo/'>Visit Website</a></p>
        </div>
      </div>
    </div>
  )
}
