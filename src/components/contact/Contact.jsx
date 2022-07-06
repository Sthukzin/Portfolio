import "./Contact.css";
import Nav from "../nav/Nav"
import React from 'react'

const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
    <Nav />
    <div className="contactGlass">
      <div className="contactGlassContainer">
        <h1 className="contactHeader">Contact</h1>
        <div className="contactForm">
        
        <form action="">
         <div className="inputGroup">
          <input type="text" id="name" />
          <label htmlFor="name">Your Name</label>
         </div>

         <div className="inputGroup">
          <input type="text" id="number" />
          <label htmlFor="number">Phone Number</label>
         </div>

         <div className="inputGroup">
          <input type="text" id="email" />
          <label htmlFor="email">Your Email</label>
         </div>

         <div className="inputGroup">
          <textarea  id="message" rows="7" required></textarea>
          <label htmlFor="message">Your Message</label>
         </div>
         <button type="submit">SUBMIT</button>

        </form>
        </div>
      
      </div>
    </div>
    <div className="circle circle1"></div>
    <div className="circle circle2"></div>
    <div className="circle circle3"></div>
    <div className="circle circle4"></div>
  </div>
  )
}

export default Contact