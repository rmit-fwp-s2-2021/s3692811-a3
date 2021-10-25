import React from "react";
import { useState } from "react";

const useInput = (value) => {
  const [input, setInput] = useState(value);

  const handleChangeInput = (value) => {
    setInput(value);
    console.log(input);
  };
  return { input, handleChangeInput };
};

export default useInput;
