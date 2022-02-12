import React from "react";
import "./Container.scss";
import ProfilePic from "../profilePic/ProfilePic";
import LinkIcons from "../LinkIcons/LinkIcons";
import Badge from "../badge";

const Container = () => {
  return (
    <div className="card">
      <ProfilePic />
      <div className="info-block">
        <h1>Welcome!</h1>
        <p className="subtitle">
          My name is Ruben Tigre, I'm currently working as Junior React
          Developer in
          <Badge variant="enterprise">
            <a
              href="https://www.linkedin.com/company/iobuilders"
              rel="noreferrer"
              target="_blank"
            >
              IoBuilders
            </a>
          </Badge>
        </p>
        <p className="description">
          My current role in the team is to develop the different views and
          requirements defined by the creative team to meet the demands of our
          product, a{" "}
          <Badge variant="NFT">
            <a
              href="https://en.wikipedia.org/wiki/Non-fungible_token"
              target="_blank"
              rel="noreferrer"
            >
              NFTs marketplace
            </a>
          </Badge>{" "}
          for big brands of the world.
        </p>
        <p className="description">
          In my github you will find the project of this
          <Badge variant="github-repository">
            <a
              href="https://github.com/TheBrodaCoder/TigerWeb"
              target="_blank"
              rel="noreferrer"
            >
              website
            </a>
          </Badge>
          , as well as different projects and deliveries. I love to keep working
          and learning, so you'll probably see some activity!
        </p>
        <p className="description">
          Feel free to
          <Badge variant="contact">
            <a href="mailto:donowenrt@gmail.com">contact</a>
          </Badge>
          me if you have any questions or proposals for me.
        </p>
        <LinkIcons />
      </div>
    </div>
  );
};

export default Container;
