import React from "react";
import SoundsLibrary from "./SoundsLibrary";
import ScrollBar from "./ScrollBar";

function SideMenu(props) {
  return (
    <div className="sideMenu">
      <div id="display" className="display">
        {props.displayInfo}
      </div>
      <ScrollBar
        volume={props.volume}
        handleVolumeChange={props.handleVolumeChange}
      />
      <SoundsLibrary
        colorizedButtonId={props.colorizedButtonId}
        changeSoundSet={props.changeSoundSet}
      />
    </div>
  );
}

export default SideMenu;
