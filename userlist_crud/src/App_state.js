import React, { useState } from "react";
import user from "./randomUser.json"

const StateTutorial = () => {
  
const [inputValue, setInputValue] = useState("Uttara");
 let onChange = (event) => {
  const newValue = event.target.value;
  setInputValue(newValue);
  console.log(inputValue)
  //console.log(user)
};
  
//  let inputValue="Uttara";

//   let onChange = (event) => {
//     inputValue = event.target.value;
//     console.log(inputValue)
//   };

 

  return (
    <div className="flex flex-col items-center justify-center m-10">
      <input placeholder="enter something..." onChange={onChange} />
      <div className="text-2xl text-blue-600 mt-10">{inputValue}</div>
    </div>
  );
};

export default StateTutorial;