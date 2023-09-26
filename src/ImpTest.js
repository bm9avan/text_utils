import inval from "./PropTest.js";
import React, { useEffect, useState } from "react";

const ImpTest = () => {
  console.log(inval);
  function change() {
    console.log(text);
    let newval = text.toUpperCase();
    setText(newval);
  }
  const [map, setmap] = useState([]);

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleExtraSpaces = () => {
    let words = text.split(" ");
    let joinedWords = "";
    // console.log(words);
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    });
    setText(joinedWords);
  };

  const [text, setText] = useState("defolt text from ImpTest");
  useEffect(() => {
    const just = text.split(" ");
    setmap(just);
  }, [text]);
  return (
    <div>
      <h4>just console but commented</h4>

      <label htmlFor="text">simply some tilte</label>
      <textarea
        name="text"
        placeholder="enter your text here"
        id="text"
        cols="50"
        rows="3"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <button className="btn btn-danger" onClick={change}>
        con
      </button>
      <div>{text.length}</div>
      <div>{text}</div>
      {map.length}
      <button
        type="submit"
        onClick={speak}
        className="btn btn-warning mx-2 my-2"
      >
        Speak
      </button>
      <button
        type="submit"
        onClick={handleExtraSpaces}
        className="btn btn-warning mx-2 my-2"
      >
        space remove
      </button>
    </div>
  );
};

export default ImpTest;
