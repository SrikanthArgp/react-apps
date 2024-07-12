//import { useState } from "react";
import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";

function App() {
  console.log("CRUD APP Function begins..")
  const [ID, setID] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  //const [userData, setUserData] = useState([]);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userList")) || []
  );
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    console.log("useEffect...")
    localStorage.setItem("userList", JSON.stringify(userData));
  }, [userData]);

  function addUser() {
    setUserData((prevData) => {
      return [
        { id: Math.random().toString(), name: name, age: age },
        ...prevData,
      ];
    });
    setName("");
    setAge("");
  }

  function getUser(id, name, age) {
    setID(id);
    setName(name);
    setAge(age);
    setIsUpdate(true);
  }

  // function updateUser() {
  //   let updatedData = userData.map((user) => {
  //     return user.id == ID ? { id: ID, name: name, age: age } : user;
  //   });
  //   setUserData(updatedData);
  //   setName("");
  //   setAge("");
  //   setIsUpdate(false);
  // }

  function updateUser(){
    setUserData((prevData)=>{
      return prevData.map((user)=> {
        return user.id == ID ? { id: ID, name: name, age: age } : user;
      })
    })
    setName("");
    setAge("");
    setIsUpdate(false);
  }

  function deleteUser(id) {
    setUserData((prevData) => {
      return prevData.filter((user) => user.id != id);
    });
  }

  console.log("CRUD APP Function ends..")
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
              Update
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
        <div className="grid grid-cols-1 md:grid-cols-2">
          {userData.length > 0 ? (
            userData.map((user) => {
              return (
                <div
                  key={user.id}
                  className="flex  items-center bg-green-200 my-2 mx-auto p-1 rounded-md w-[50%]"
                >
                  <div className="w-[40%]">{user.name} </div>
                  <div className="w-[20%]">{user.age} </div>
                  {/* <button
                  className="bg-blue-400 p-2 w-fit mr-2"
                  onClick={() => {
                    getUser(user.id, user.name, user.age);
                  }}
                >
                  Update
                </button> */}
                  <MdEdit
                    size={40}
                    className="hover:bg-blue-400 p-2 w-fit mr-2"
                    onClick={() => {
                      getUser(user.id, user.name, user.age);
                    }}
                  />
                  <button
                    className="bg-red-400 p-2 w-fit"
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })
          ) : (
            <div className="text-center"> No User</div>
          )}
        </div>
      </div>
    </>
  );
}


export  default App;
