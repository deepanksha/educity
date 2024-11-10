import React from "react";
import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          incidunt. Minima vel tempora nemo adipisci ducimus. Consequatur
          maiores quaerat inventore perferendis magn illo magni possimus.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum harum
          qui dignissimos temporibus rerum vitae! Ut illo, tenetur dolores
          neque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reiciendis,debitis mollitia ex nemo dolor perspiciatis quidem
          laboriosam. Dolorem a quam fuga.
        </p>
      </div>
    </div>
  );
};

export default About;
