import React from "react";
import PropTypes from "prop-types";

const Test = (props) => {
  return (
    <div>
      test start here
      <div>where are u 1 test {props.val.w}</div>
      <div>where are u 2 test {props.val.z}</div>
      <div>where are u 2 test {props.v}</div>
      <div>where are u 3 test :{props.notavil}</div>
      {/* {console.log(props.notavil)} */}
    </div>
  );
};

Test.propTypes = {
  val: PropTypes.object,
};

Test.defaultProps = {
  v: "default",
};

export default Test;
