import React from "react";
import Border from "./Border";

const Button = (props) => {
  return (
    <Border className="bg-white shadow-lg">
      <button type="button" className="p-1 text-black" onClick={props.onClick}>
        {props.name}
      </button>
    </Border>
  );
};

export default Button;
