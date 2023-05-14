import React from "react";
import "./Dictionary.css";
export default function Phonetic(props) {
  console.log(props);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <span className="phonetics">{props.phonetic.text}</span>
    </div>
  );
}
