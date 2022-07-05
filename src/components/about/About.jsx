import React from 'react';
import "./About.css";
import Nav from "../nav/Nav"
import ProfilePic from "../../assets/coding.jpg"

const About = () => {
  return (
    <div className="aboutContainer" id="about">
    <Nav />
    <div className="aboutglass">
      <div className="aboutGlass-container">
        <h1 className="about-header">About</h1>
        <div className="aboutText">
         <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          consequatur saepe natus quis? Quia quae repellat aliquam et
          cupiditate vel provident tempore veritatis quis voluptatum officia
          nulla, saepe quam obcaecati ratione asperiores pariatur architecto,
          unde deserunt! Porro non minima molestiae rerum veritatis rem,
          alias, provident asperiores inventore cumque, dignissimos corporis?
          <br /><br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          consequatur saepe natus quis? Quia quae repellat aliquam et
          cupiditate vel provident tempore veritatis quis voluptatum officia
          nulla, saepe quam obcaecati ratione asperiores pariatur architecto,
          unde deserunt! Porro non minima molestiae rerum veritatis rem,
          alias, provident asperiores inventore cumque, dignissimos corporis?
          </div>
          <div className="cards">
         <img src={ProfilePic} alt="" />
        </div>
        </div>
      
      </div>
    </div>
    <div className="circle circle1"></div>
    <div className="circle circle2"></div>
    <div className="circle circle3"></div>
    <div className="circle circle4"></div>
  </div>
  );
}

export default About;
