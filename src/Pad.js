import React from "react";

function Pad(props) {
  return (
    <button id={props.id} className="drum-pad" onMouseDown={props.play}>
      {props.content}
      <audio
        id={props.content}
        src={props.src}
        className="clip"
        preload="true"
        title={props.soundName}
      ></audio>
    </button>
  );
}

export default Pad;
