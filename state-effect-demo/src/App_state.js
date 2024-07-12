import { useState } from "react";

function App() {

//   const [inputValue, setInputValue] = useState("Uttara");
const [inputValue, setInputValue] = useState("Uttara");

 let onChange = (event) => {
  const newValue = event.target.value;
  setInputValue(newValue);
  console.log(inputValue)
};
  
//  let inputValue="Uttara";

//   let onChange = (event) => {
//     inputValue = event.target.value;
//     console.log(inputValue)
//   };

 

  return (
    <div className="flex flex-col items-center justify-center m-10 ">
      <input placeholder="enter something..." className="border-blue-400 border-2 w-[30%] rounded-md px-2" onChange={onChange} />
      <div className="text-2xl text-blue-600 mt-10">{inputValue}</div>
    </div>
  );
}

export default App;
