import React from "react";
import Pad from "../Pad/Pad";
import styles from "./PadBox.module.css";

function PadBox({ lettersArr, soundSet, mouseListener, soundNames }) {
  let padArray = [];
  padArray = lettersArr.map((element, index) => {
    return (
      <Pad
        id={`Key${element}`}
        src={soundSet[index]}
        content={element}
        key={element}
        mouseListener={mouseListener}
        soundName={soundNames[index]}
      />
    );
  });

  return <div className={styles.padBox}>{padArray}</div>;
}

export default PadBox;
