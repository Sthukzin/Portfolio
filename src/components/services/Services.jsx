import "./services.css";
import React from "react";
import Nav from "../nav/Nav";
import Collaboration from "../../assets/collaborating.jpg";

const Services = () => {
  return (
    <div className="container" id="services">
      <Nav />
      <div className="glass">
        <div className="glass-container">
          <h1 className="servicesHeader">Services</h1>
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            consequatur saepe natus quis? Quia quae repellat aliquam et
            cupiditate vel provident tempore veritatis quis voluptatum officia
            nulla, saepe quam obcaecati ratione asperiores pariatur architecto,
            unde deserunt! Porro non minima molestiae rerum veritatis rem,
            alias, provident asperiores inventore cumque, dignissimos corporis?
          </div>
          <div className="cards">
            <div className="card card1">
              <div>
                <img className="cardImage" src={Collaboration} alt="" />
                <h4>Web Development</h4>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo aut laboriosam, similique repellendus modi saepe. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Explicabo aut
              laboriosam, similique repellendus modi saepe.
            </div>
            <div className="card card2">
              <div>
                <img className="cardImage" src={Collaboration} alt="" />
                <h4>Web Development</h4>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo aut laboriosam, similique repellendus modi saepe. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Explicabo aut
              laboriosam, similique repellendus modi saepe.
            </div>
            <div className="card card3">
              <div>
                <img className="cardImage" src={Collaboration} alt="" />
                <h4>Web Development</h4>
              </div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo aut laboriosam, similique repellendus modi saepe. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Explicabo aut
              laboriosam, similique repellendus modi saepe.
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
};

export default Services;
