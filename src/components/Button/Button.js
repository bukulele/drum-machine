import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      id={props.id}
      onClick={props.onClick}
      value={props.value}
      className={
        props.colorizedButtonId === props.id
          ? `${styles.button} radial-accent`
          : styles.button
      }
    >
      <FontAwesomeIcon icon={props.icon} pointerEvents="none" />
      {props.children}
    </button>
  );
}

export default Button;
