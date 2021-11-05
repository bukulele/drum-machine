import React, { useRef } from "react";
import styles from "./Pad.module.css";

function Pad({ id, content, src, soundName, mouseListener }) {
  const audioRef = useRef();
  const handleMouseDown = (event) => {
    mouseListener(audioRef, event);
  };
  return (
    <button
      id={id}
      className={styles["drum-pad"]}
      onMouseDown={handleMouseDown}
    >
      {content}
      <audio
        ref={audioRef}
        id={content}
        src={src}
        className="clip"
        preload="true"
        title={soundName}
      ></audio>
    </button>
  );
}

export default Pad;
