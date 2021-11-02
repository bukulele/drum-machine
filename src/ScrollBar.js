import React from "react";

function ScrollBar(props) {
  return (
    <div className="scrollBar">
      <p>Sound volume</p>
      <input
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
