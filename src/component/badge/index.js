import React from "react";
import "./badge.scss";

export default function Badge({ children, variant }) {
  return (
    <span className="badge" id={variant}>
      {children}
    </span>
  );
}
