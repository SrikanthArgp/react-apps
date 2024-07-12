
import { useState,useEffect, useReducer } from "react";
import UserItem from "./UserItem";
import reducer from './reducer'



export default function App() {

 
  const [ID, setID] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  //const [userData, setuserData] = useState(JSON.parse(localStorage.getItem('userList'))||[]);
const [userData, dispatchAction] = useReducer(reducer, [], 
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
    dispatchAction({type:"ADD", payload: {name: name, age:age}})
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

  dispatchAction({type:"UPDATE", payload:{id:ID, name: name, age:age}})
    setName("");
    setAge("");
    setisUpdate(false);
  }

  function deleteUser(id) {
    dispatchAction({type:"DELETE", payload:id})
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
