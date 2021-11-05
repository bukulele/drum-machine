import React, { useRef } from "react";

function Pad({ id, content, src, soundName, mouseListener }) {
  const audioRef = useRef();
  const handleMouseDown = (event) => {
    mouseListener(audioRef, event);
  };
  return (
    <button id={id} className="drum-pad" onMouseDown={handleMouseDown}>
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
