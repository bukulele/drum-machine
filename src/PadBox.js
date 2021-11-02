import React from "react";
import Pad from "./Pad";

function PadBox(props) {
  let padArray = [];
  padArray = props.lettersArr.map((elem, index) => (
    <Pad
      id={index}
      src={props.soundSet[index]}
      content={elem}
      key={elem}
      play={props.play}
      soundName={props.soundNames[index]}
    />
  ));
  return <div className="padBox">{padArray}</div>;
}

export default PadBox;
