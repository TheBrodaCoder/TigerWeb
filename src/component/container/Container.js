import React from "react";
import "./Container.scss";
import ProfilePic from "../profilePic/ProfilePic";
import LinkIcons from "../LinkIcons/LinkIcons";

const Container = () => {
  return (
    <div className="card">
      <ProfilePic />
      <div className="info-block">
        <h1>Welcome!</h1>
        <p className="subtitle">
          My name is Ruben Tigre, I am a React Developer for
          <span id="enterprise">IoBuilders</span>.
        </p>
        <p className="description">
          After finishing my studies I decided to specialize in the development
          sector, for this I used different resources such as 'The Modern React
          Bootcamp' by Colt Steele and
          <span id="fullstack">
            <a
              href="https://fullstackopen.com/en/about"
              rel="noreferrer"
              target="_blank"
            >
              'Full Stack Open'
            </a>
          </span>
          by the University of Helsinki.
        </p>
        <p className="description">
          In my github you will find the project of this
          <span id="github-repository">
            <a
              href="https://github.com/TheBrodaCoder/TigerWeb"
              target="_blank"
              rel="noreferrer"
            >
              website
            </a>
          </span>
          , as well as different projects and deliveries. I love to keep working
          and learning, so you'll probably see some activity!
        </p>
        <p className="subtitle">
          Feel free to
          <span id="contact">
            <a href="mailto:donowenrt@gmail.com">contact</a>
          </span>
          me if you have any questions or proposals for me.
        </p>
        <LinkIcons />
      </div>
    </div>
  );
};

export default Container;
