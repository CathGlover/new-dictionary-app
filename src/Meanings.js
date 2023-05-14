import React from "react";
import Synonyms from "./Synonyms";
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <Synonyms synonyms={props.meaning.synonyms} />
      <br />
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <br />
            <div className="defining">{definition.definition}</div>
            <div className="example"></div>
            <em>{definition.example}</em>
            <br />
          </div>
        );
      })}
    </div>
  );
}
