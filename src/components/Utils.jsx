import React, { useEffect, useRef, useState } from "react";
import Button from "../UI/Button";

const Utils = ({ col }) => {
  const [text, setText] = useState("Default text from Utils");
  const [camelCasetext, setCamelCaseText] = useState(null);
  const [textArr, setTestArr] = useState([]);
  const textRef = useRef(null);
  const disText = camelCasetext || text;

  const speak = () => {
    window.speechSynthesis.cancel();
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const cancel = () => {
    window.speechSynthesis.cancel();
  };
  const pause = () => {
    window.speechSynthesis.pause();
  };
  const resume = () => {
    window.speechSynthesis.resume();
  };

  const handleExtraSpaces = () => {
    let words = text.split(" ").filter((ele) => ele !== "");
    setText(words.join(" "));
  };

  const handelCopy = () => {
    textRef.current.select();
    navigator.clipboard.writeText(disText);
  };

  const camelCase = () => {
    let str = text;
    setCamelCaseText(
      str
        .toLocaleLowerCase()
        .split(" ")
        .reduce((s, c) => s + (c.charAt(0).toUpperCase() + c.slice(1)))
    );
  };

  useEffect(() => {
    const just = text.split(" ").filter((word) => word !== "");
    setTestArr(just);
  }, [text]);

  return (
    <div
      className="text-center h-screen w-full flex flex-col items-center"
      style={{ background: `rgb(${col.join(",")})` }}
    >
      <h3 className="pt-6 font-bold font-xl">TEXT UTILS</h3>
      <label htmlFor="text" className="mt-8">
        Enter your text below
      </label>
      <textarea
        name="text"
        placeholder="Enter your text here"
        id="text"
        ref={textRef}
        className="w-4/5 p-3 border border-red-300 rounded-lg text-black focus:ring focus:ring-red-500 focus:border-red-500 focus:border-2 focus:border-opacity-50"
        rows="4"
        value={camelCasetext || text}
        onChange={(e) => {
          setCamelCaseText(null);
          setText(e.target.value);
        }}
      />

      <div className="font-bold">Number of Words: {textArr.length}</div>
      <div className="font-bold">Number of Letters: {text.trim().length}</div>
      {disText && (
        <div className="text-justify p-5 lg:px-40">
          Output: {disText.slice(0, 500)}
        </div>
      )}
      {disText.trim().length > 500 && (
        <div className="font-bold">
          ...... remaining {disText.trim().length - 500} Letters are not
          displayed
        </div>
      )}
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
          <Button onClick={handelCopy} name="Copy" />
        </div>
        <div className="flex gap-4 justify-center">
          <Button onClick={speak} name="ReadAloud" />
          <Button onClick={pause} name="Pause" />
          <Button onClick={resume} name="Resume" />
          <Button onClick={cancel} name="Cancel" />
        </div>
      </div>
    </div>
  );
};

export default Utils;
