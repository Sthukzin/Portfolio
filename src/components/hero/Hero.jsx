import "./Hero.css";
import Profile from "../../assets/programming.jpg";

import React from 'react'

const hero = () => {
  return (
    <div className="container " id="home">
      <div className="glass">
          <div className="contents">
            <h3>Hi, My Name is</h3>
            <h1>Thulani Mathebula</h1>
            <h5>I am Qualified Web Developer</h5>
            <br />
            
          </div>
          <div className="buttons" >
        <button className="">More About Me</button>
        <button className="">Download CV</button></div>
          <div className="profile-image">
            <img src={Profile} alt="" />
          </div>
      </div>
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
    </div>
  )
}

export default hero