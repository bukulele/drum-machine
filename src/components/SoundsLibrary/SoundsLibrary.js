import React from "react";
import Button from "../Button/Button";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import styles from "./SoundsLibrary.module.css";

function SoundsLibrary(props) {
  let buttonArray = [];
  for (let i = 1; i <= 7; i++) {
    buttonArray.push(
      <Button
        id={"SET_" + i}
        key={"SET_" + i}
        onClick={props.changeSoundSet}
        children={" " + i}
        icon={faMusic}
        colorizedButtonId={props.colorizedButtonId}
      />
    );
  }

  return (
    <div className={styles.soundsLibrary}>
      <p className={styles.text}>Sound library</p>
      <div className={styles.buttonsBlock}>{buttonArray}</div>
    </div>
  );
}

export default SoundsLibrary;
