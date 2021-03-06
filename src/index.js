import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PadBox from "./components/PadBox/PadBox";
import SideMenu from "./components/SideMenu/SideMenu";
import "./index.css";
import SET_1 from "./components/SoundSets/soundSet1";
import SET_2 from "./components/SoundSets/soundSet2";
import SET_3 from "./components/SoundSets/soundSet3";
import SET_4 from "./components/SoundSets/soundSet4";
import SET_5 from "./components/SoundSets/soundSet5";
import SET_6 from "./components/SoundSets/soundSet6";
import SET_7 from "./components/SoundSets/soundSet7";

function App() {
  const [soundSet, setSoundSet] = useState(Object.values(SET_1));
  const [soundNames, setSoundNames] = useState(Object.keys(SET_1));
  const [displayInfo, setDisplayInfo] = useState(null);
  const [colorizedButtonId, setColorizedButtonId] = useState("SET_1");
  const [volume, setVolume] = useState(70);
  const [timer, setTimer] = useState(false);

  const lettersArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  let sound;

  const mouseListener = (object, event) => {
    let element = object.current;
    play(element);
    colorizePad(event.target);
  };

  const keyboardListener = (event) => {
    let idToPlay = event.code[event.code.length - 1];
    let idToColorize = event.code;
    if (lettersArr.includes(idToPlay)) {
      let elementToPlay = document.getElementById(idToPlay);
      let elementToColorize = document.getElementById(idToColorize);
      play(elementToPlay);
      colorizePad(elementToColorize);
    }
  };

  function play(object) {
    sound = object;
    sound.volume = volume / 100;
    sound.pause();
    sound.currentTime = 0;
    sound.play();
    showDisplayInfo(sound.title);
  }

  const changeSoundSet = (event) => {
    let newSet;
    switch (event.target.id) {
      case "SET_1":
        newSet = SET_1;
        break;
      case "SET_2":
        newSet = SET_2;
        break;
      case "SET_3":
        newSet = SET_3;
        break;
      case "SET_4":
        newSet = SET_4;
        break;
      case "SET_5":
        newSet = SET_5;
        break;
      case "SET_6":
        newSet = SET_6;
        break;
      case "SET_7":
        newSet = SET_7;
        break;
      default:
        newSet = SET_1;
        break;
    }
    setSoundSet(Object.values(newSet));
    setSoundNames(Object.keys(newSet));
    setColorizedButtonId(event.target.id);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    showDisplayInfo(`Sound volume: ${event.target.value}`);
  };

  useEffect(() => {
    window.addEventListener("keydown", keyboardListener);
    return () => {
      window.removeEventListener("keydown", keyboardListener);
    };
  });

  function showDisplayInfo(data) {
    setDisplayInfo(() => {
      if (timer) {
        clearTimeout(timer);
      }
      setTimer(setTimeout(() => setDisplayInfo(""), 1000));
      return data;
    });
  }

  function colorizePad(element) {
    element.classList.add("radial-accent");
    setTimeout(() => element.classList.remove("radial-accent"), 100);
  }

  return (
    <div id="drum-machine" className="drumMachine">
      <PadBox
        soundSet={soundSet}
        soundNames={soundNames}
        lettersArr={lettersArr}
        mouseListener={mouseListener}
      />
      <SideMenu
        displayInfo={displayInfo}
        colorizedButtonId={colorizedButtonId}
        changeSoundSet={changeSoundSet}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
