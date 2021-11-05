import React from "react";
import styles from "./ScrollBar.module.css";

function ScrollBar(props) {
  return (
    <div className={styles.scrollBar}>
      <p className={styles.text}>Sound volume</p>
      <input
        className={styles.input}
        type="range"
        min="0"
        max="100"
        value={props.volume}
        step="1"
        name="scrollbar"
        onChange={props.handleVolumeChange}
      />
    </div>
  );
}

export default ScrollBar;
