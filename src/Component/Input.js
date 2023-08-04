import React, { useState } from "react";

const Input = (props) => {
  //For change input data dynamically.
  const [inputVal, setInputval] = useState("");

  // FOr adding Dynamcic Style.
  const [isValid, setIsValid] = useState(true);

  const inputHandler = (event) => {
    setInputval(event.target.value);
    setIsValid(true);
  };

  const getInput = () => {
    if (inputVal.trim().length === 0) {
      setIsValid(false);
    }
    props.get(inputVal);
    setInputval("");
  };

  return (
    <div className="content">
      <h3>Course Goal</h3>
      <input
        type="text"
        value={inputVal}
        onChange={inputHandler}
        style={{ borderColor: !isValid ? "indianred" : "black" }}
      ></input>
      <br />
      <button
        className="btn"
        onClick={getInput}
        style={{ backgroundColor: !isValid ? "indianred" : "#8b005d" }}
      >
        Add Goal
      </button>
    </div>
  );
};

export default Input;
