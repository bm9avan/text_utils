import React from "react";

const Button = (props) => {
  return (
    <>
      <button type="button" className="border-red-900 p-2 border-2" onClick={props.onClick}>
        {props.name}
      </button>
    </>
  );
};

export default Button;
