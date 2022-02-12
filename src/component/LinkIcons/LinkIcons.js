import React from "react";
import Icons from "../Icons/Icons";
import data from "./data.json";
import "./LinkIcons.scss";

const renderIcons = (links) => {
  return links.map((link) => (
    <Icons key={link.icon} link={link.Link} icon={link.icon} />
  ));
};
const LinkIcons = () => {
  return (
    <div className="List-Grid">
      <div className="List-Icons">{renderIcons(data.icons)}</div>
    </div>
  );
};

export default LinkIcons;
