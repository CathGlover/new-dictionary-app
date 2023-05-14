import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Definitions from "./Definitions";
export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definitions, setDefinitions] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setDefinitions(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>What are you looking for?</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word, e.g. sea, seaside, shells, ocean"
              onChange={handleKeywordChange}
            />
          </form>
        </section>
        <Definitions definitions={definitions} />
      </div>
    );
  } else {
    load();
  }
}
