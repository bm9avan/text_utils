import React, { useEffect, useState } from "react";
import Button from "../UI/Button";

const Utils = () => {
  const [text, setText] = useState("Default text from Utils");
  const [textArr, setTestArr] = useState([]);

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

  useEffect(() => {
    const just = text.split(" ").filter((word) => word !== "");
    setTestArr(just);
  }, [text]);
  return (
    <div className="text-center">
      <label htmlFor="text" className="mt-8">
        simply some tilte
      </label>
      <textarea
        name="text"
        placeholder="enter your text here"
        id="text"
        className="w-4/5 border-red-800 border-2"
        rows="3"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div>Number of Words: {textArr.length}</div>
      <div>Number of Letters: {text.trim().length}</div>
      <div>Output: {text}</div>
      <Button onClick={() => setText(text.toUpperCase())} name="To UpperCase" />
      <Button onClick={speak} name="Speak" />
      <Button onClick={handleExtraSpaces} name="space remove" />
    </div>
  );
};

export default Utils;
