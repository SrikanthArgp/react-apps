//import { useState } from "react";
import { useState,useEffect, useReducer } from "react";
import UserItem from "./UserItem";
import reducer from './reducer'

// function reducer(state, action){
//   switch(action.type) {
//     case "ADD":
//       return [
//         { id: Math.random().toString(), name: action.payload.name, age: action.payload.age },
//         ...state,
//       ];

//     case "UPDATE":
//       return state.map((user) => {
//                return user.id === action.payload.id ? { id: action.payload.id, name: action.payload.name, age: action.payload.age } : user})

//     case 'DELETE':
//       return state.filter((item) => item.id != action.payload);

//     default:
//       return state

//   }

//}




export default function App() {
  const [ID, setID] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  //const [userData, setuserData] = useState(JSON.parse(localStorage.getItem('userList'))||[]);
const [userData, dispatch] = useReducer(reducer, [], 
  () => {
  const localValue = JSON.parse(localStorage.getItem("userList"));
  return localValue ? localValue : [];
}
);
  
const [isUpdate, setisUpdate] = useState(false);

  useEffect(() => {
    localStorage.setItem('userList', JSON.stringify(userData))
    
  }, [userData]);

  function addUser() {
    // setuserData((prevData) => {
    //   return [
    //     { id: Math.random().toString(), name: name, age: age },
    //     ...prevData,
    //   ];
    // });
    dispatch({type:"ADD", payload: {name: name, age:age}})
    //console.log("User Data : ", userData);
    setName("");
    setAge("");
  }

  function getUser(id, name, age) {
    setID(id);
    setName(name);
    setAge(age);
    setisUpdate(true);
  }

 function updateUser() {
   // const selectUser = userData.find((user)=>user.id===ID)
    // const updatedUserData = userData.map((user)=>{
    //     return user.id === selectUser.id?
    //     {id:user.id, name:name, age:age}:
    //     user
    // })

  //   setuserData((prevData) => {
  //     return prevData.map((user) => {
  //       return user.id === ID ? { id: user.id, name: name, age: age } : user;
  //     });
  //   });
  dispatch({type:"UPDATE", payload:{id:ID, name: name, age:age}})
    setName("");
    setAge("");
    setisUpdate(false);
  }

  function deleteUser(id) {
    // setuserData((prevData) => {
    //   return prevData.filter((item) => item.id != id);
    // });
    dispatch({type:"DELETE", payload:id})
  }

  return (
    <>
      <div className="bg-amber-100 h-screen max-h-full">
        <h1 className="text-green-500   text-center text-4xl">
          First React CRUD App
        </h1>
        <div className="bg-gray-200 m-4 p-2 bg-center w-max border-orange-500 border-2 rounded-md  mx-auto text-2xl mb-4 text-red-900 text-center">
          <p>Get started</p>
        </div>
        {/* input section */}
        <div className="flex flex-col w-[50%] mx-auto">
          <input
            className="p-2 m-2"
            placeholder="Enter Your Name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="p-2 m-2"
            placeholder="Enter Your Age"
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />

          {isUpdate ? (
            <button
              className="bg-blue-400 m-2 p-2 rounded-md hover:bg-blue-600 hover:shadow-lg text-white"
             onClick={updateUser}
            >
              UPDATE
            </button>
          ) : (
            <button
              className="bg-blue-400 m-2 p-2 rounded-md hover:bg-blue-600 hover:shadow-lg text-white"
              onClick={addUser}
            >
              ADD
            </button>
          )}
        </div>

        {/* display section */}
        <div className=" flex flex-col w-[50%] mx-auto">

          {userData.length>0 ? (userData.map((data) => {
            return (
              // <div key={data.id}>
              //   <div className="flex items-center mx-auto bg-green-100 p-2 text-xl m-2 hover:bg-green-500">
              //     <div className="w-[40%]">{data.name} </div>
              //     <div className="w-[20%]">{data.age}</div>
              //     {/* <button
              //       className="p-2 bg-yellow-200 m-2"
              //       onClick={() => {
              //         getUser(data.id, data.name, data.age);
              //       }}
              //     >
              //       Edit
              //     </button> */}
              //     <FaEdit  size={80}
              //        className="p-2 hover:scale-110 duration-200 m-2"
              //        onClick={() => {
              //          getUser(data.id, data.name, data.age);
              //        }}
              //     />
              //     <button
              //       className="p-2 bg-red-300"
              //       onClick={() => {
              //         deleteUser(data.id);
              //       }}
              //     >
              //       Delete
              //     </button>
              //   </div>
              // </div>
              <UserItem key={data.id} data={data} getUser={getUser} deleteUser={deleteUser}/>
            );
          })):(<div className="mx-auto">
            No User Data
          </div>)}
        </div>
      </div>
    </>
  );
        }
