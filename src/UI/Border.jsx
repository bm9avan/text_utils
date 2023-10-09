import React from "react";

const Border = (props) => {
  return (
    <span
      className={`border-2 border-red-900 ${props.className} rounded-xl px-2`}
    >
      {props.children}
    </span>
  );
};

export default Border;
