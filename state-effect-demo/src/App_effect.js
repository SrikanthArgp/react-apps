import { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
      fetch("https://randomuser.me/api/?results=20")
      .then((response)=>response.json())
      .then((res) => {
        setData(res.results[2].email);
        console.log("API WAS CALLED");
        console.log(res.results)
      })
      .catch(err=>{console.log("Error: ", err)});
  
   
  }, [count]);



  // useEffect(() => {
  //   fetch("https://randomuser.me/api/?results=20")
  //     .then((response)=>response.json())
  //     .then((res) => {
  //       setData(res.results[2].email);
  //       console.log("API WAS CALLED");
  //       console.log(res.results)
  //     })
  //     .catch(err=>{console.log("Error: ", err)});

  // }, [count]);

  // Async Await ..Version
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const usersRes = await fetch("https://randomuser.me/api/?results=20");
//         const users = await usersRes.json();
//         setData(users.results[2].email);
//         console.log("API WAS CALLED");
//         console.log(users.results);
//       } catch (err) {
//         console.log("Error: ", err);
//       }
//     };

//     fetchUsers();
//   }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      Hello World
      <h1>{count}</h1>
      <button
        className="bg-blue-500 py-1 px-4 text-white text-2xl"
        onClick={() => {
          setCount(count + 1);
          console.log("In onClick");
        }}
      >
        Click
      </button>
      <h1 className="mt-10">{data}</h1>
    </div>
  );
}

export default App;
