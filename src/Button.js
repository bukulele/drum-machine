import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button(props) {
  return (
    <button
      id={props.id}
      onClick={props.onClick}
      value={props.value}
      className={
        props.colorizedButtonId === props.id ? "button radial-accent" : "button"
      }
    >
      <FontAwesomeIcon icon={props.icon} pointerEvents="none" />
      {props.children}
    </button>
  );
}

export default Button;
