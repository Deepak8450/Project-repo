import React from 'react'
import "./Footer.css";

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-heading'>
            <h2>Contact Information</h2>
            <p>Have a Question? Contact me.</p>
        </div>
      <ul>
        <li><i class="fa-brands fa-linkedin"></i>linkedin</li>
        <li><i class="fa-brands fa-square-whatsapp"></i>Whatsapp</li>
        <li><i class="fa-brands fa-youtube"></i>YouTube</li>
        <li><i class="fa-brands fa-github"></i>Git-hub</li>
      </ul>
    </div>
  )
}
