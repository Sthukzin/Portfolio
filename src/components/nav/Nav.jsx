import "./Nav.css";
import React from 'react'

const nav = () => {
  return (
    <div className="navbar">
      Thulani 
      <ul>
        <li> <a href="#home">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default nav