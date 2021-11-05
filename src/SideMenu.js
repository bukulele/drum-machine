import React from "react";
import SoundsLibrary from "./SoundsLibrary";
import ScrollBar from "./ScrollBar";

function SideMenu({
  displayInfo,
  colorizedButtonId,
  changeSoundSet,
  volume,
  handleVolumeChange,
}) {
  return (
    <div className="sideMenu">
      <div id="display" className="display">
        {displayInfo}
      </div>
      <ScrollBar volume={volume} handleVolumeChange={handleVolumeChange} />
      <SoundsLibrary
        colorizedButtonId={colorizedButtonId}
        changeSoundSet={changeSoundSet}
      />
    </div>
  );
}

export default SideMenu;
