import React, { useEffect, useState } from "react";
import Button from "../UI/Button";

const Utils = ({ col }) => {
  const [text, setText] = useState("Default text from Utils");
  const [camelCasetext, setCamelCaseText] = useState(null);
  const [textArr, setTestArr] = useState([]);

  const speak = () => {
    console.log(window.speechSynthesis);
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const pause = () => {
    window.speechSynthesis.pause();
    console.log(window.speechSynthesis);
  };
  const resume = () => {
    window.speechSynthesis.resume();
    console.log(window.speechSynthesis);
  };

  const handleExtraSpaces = () => {
    let words = text.split(" ").filter((ele) => ele !== "");
    setText(words.join(" "));
  };

  const camelCase = () => {
    let str = text;
    setCamelCaseText(
      str
        .split(" ")
        .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)))
    );
    console.log(camelCasetext);
  };

  useEffect(() => {
    const just = text.split(" ").filter((word) => word !== "");
    setTestArr(just);
  }, [text]);

  return (
    <div
      className="text-center h-screen w-full flex flex-col items-center"
      style={{ background: col }}
    >
      <label htmlFor="text" className="mt-8">
        Enter your text below
      </label>
      <textarea
        name="text"
        placeholder="enter your text here"
        id="text"
        className="w-4/5 border-red-800 border-2 text-black"
        rows="3"
        value={camelCasetext || text}
        onChange={(e) => {
          setCamelCaseText(null);
          setText(e.target.value);
        }}
      />
      <div>Number of Words: {textArr.length}</div>
      <div>Number of Letters: {text.trim().length}</div>
      {text && <div>Output: {text}</div>}
      <div className="p-3 flex-row gap-4 justify-center">
        <div className="flex gap-4 my-4 justify-center">
          <Button
            onClick={() => {
              setText(text.toUpperCase());
              setCamelCaseText(null);
            }}
            name="UpperCase"
          />
          <Button
            onClick={() => {
              setText(text.toLowerCase());
              setCamelCaseText(null);
            }}
            name="LowerCase"
          />
          <Button onClick={camelCase} name="CamelCase" />
        </div>
        <div className="flex gap-4 my-4 justify-center">
          <Button onClick={handleExtraSpaces} name="Remove Extra Space" />
        </div>
        <div className="flex gap-4 justify-center">
          <Button onClick={speak} name="Read Aloud" />
          <Button onClick={pause} name="Pause" />
          <Button onClick={resume} name="Resume" />
        </div>
      </div>
    </div>
  );
};

export default Utils;
