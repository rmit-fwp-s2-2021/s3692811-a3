import React, { useEffect } from "react";
import { useState } from "react";

const useInput = (value, profiles) => {
  const [input, setInput] = useState(value, profiles);

  const handleChangeInput = (value) => {
    setInput(value);
  };

  // useEffect(() => {
  //   handleChangeInput("");
  // }, [profiles]);

  return { input, handleChangeInput };
};

export default useInput;
