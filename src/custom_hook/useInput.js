import React from "react";
import { useState } from "react";

const useInput = (value) => {
  const [input, setInput] = useState(value);

  const handleChangeInput = (value) => {
    setInput(value);
  };
  return { input, handleChangeInput };
};

export default useInput;
