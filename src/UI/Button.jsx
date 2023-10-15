import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className="border-2 mx-2 my-1 border-red-50 bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 active:bg-opacity-90 bg-blur-lg bg-gradient-to-r from-red-900 via-green-900 to-blue-900  hover:from-blue-900 hover:to-red-900 text-white px-4 py-1 rounded-md shadow-md hover:shadow-lg focus:ring focus:ring-blue-400 focus:ring-opacity-50 focus:outline-none transition-all ease-linear duration-300"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
