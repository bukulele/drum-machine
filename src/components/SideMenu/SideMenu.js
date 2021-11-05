import React from "react";
import SoundsLibrary from "../SoundsLibrary/SoundsLibrary";
import ScrollBar from "../ScrollBar/ScrollBar";
import styles from "./SideMenu.module.css";

function SideMenu({
  displayInfo,
  colorizedButtonId,
  changeSoundSet,
  volume,
  handleVolumeChange,
}) {
  return (
    <div className={styles.sideMenu}>
      <div id="display" className={styles.display}>
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
