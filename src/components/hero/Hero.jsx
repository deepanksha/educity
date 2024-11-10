import React from "react";
import "./hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <>
      <div className="hero container">
        <div className="hero-text">
          <h1>We Ensure better education for a better world</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vitae
            numquam tempore dolorem molestiae? Autem aliquid debitis sit ,
            accusantium et dolor.
          </p>
          <button className="btn">
            Explore more <img src={dark_arrow} alt="" />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
