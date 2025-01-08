import React from 'react'
import "./Home.css";
import homeImg from "./PortFolioImg.jfif";

export default function Home() {
  return (
    <div className='home-page'>
      <img src={homeImg} id='homeImg'/>
    </div>
  )
}
