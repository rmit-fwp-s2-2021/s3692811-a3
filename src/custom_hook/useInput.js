import React, { useEffect } from "react";
import { useState } from "react";

const useInput = (value, profiles) => {
  const [input, setInput] = useState(value, profiles);

  const handleChangeInput = (value) => {
    setInput(value);
  };

  /*
    This useEffect serves as a helper function for useInput hook.
    It helps to clear the input of the search bar after successful searches.
    To test it, just unComment the useEffect below and remove the useEffect 
    inside Home components
  */
  // useEffect(() => {
  //   handleChangeInput("");
  // }, [profiles]);

  return { input, handleChangeInput };
};

export default useInput;
