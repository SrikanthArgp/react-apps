//import { useState } from "react";
import { useState, useEffect } from "react";
import { MdModeEdit } from "react-icons/md";
import InputDemo from "./components/InputDemo";

 export default function App() {
  const [ID, setID] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userList")) || []
  );
  const [isUpdate, setIsUpdate] = useState(false);

console.log("APP Starting ....")

  useEffect(() => {
    console.log("In useEffect ....")
    localStorage.setItem("userList", JSON.stringify(userData));
  }, [userData]);

  function addUser() {
    setUserData((prevState) => {
      return [
        { id: Math.random().toString(), name: name, age: age },
        ...prevState,
      ];
    });
    setName("");
    setAge("");
  }

  function getUser(id, name, age) {
    setID(id);
    setName((prevName)=>name);
    setAge(age);
    setIsUpdate(true);
  }

  // function updateUser() {
  //   let updateUser = userData.map((user) => {
  //     return user.id == ID ? { id: ID, name: name, age: age } : user;
  //   });
  //   setUserData(updateUser);
  //   setIsUpdate(false);
  //   setName("");
  //   setAge("");
  // }

  function updateUser() {
    setUserData((prevState) => {
      return prevState.map((user) => {
        return user.id == ID ? { id: ID, name: name, age: age } : user;
      });
    });
    setIsUpdate(false);
    setName("");
    setAge("");
  }

  function deleteUser(id) {
    setUserData((prevUserData) => {
      return prevUserData.filter((user) => id != user.id);
    });
  }

  console.log("APP End ....")

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
        <InputDemo
          name={name}
          setName={setName}
          age={age}
          setAge={setAge}
          addUser={addUser}
          isUpdate={isUpdate}
          updateUser={updateUser}
        />

        {/* display section */}
        {userData.length > 0 ? (
          userData.map((user) => {
            return (
              <div
                key={user.id}
                className="flex bg-green-200 p-2 my-2 w-[50%] mx-auto rounded-md"
              >
                <div className="w-[40%]">{user.name}</div>
                <div className="w-[20%]">{user.age}</div>

                <MdModeEdit
                  size={30}
                  className="hover:bg-blue-500 w-[20%] p-1 mr-2 rounded-sm"
                  onClick={() => {
                    getUser(user.id, user.name, user.age);
                  }}
                />

                {/* <div><button className="bg-blue-500 p-1 mr-2 rounded-sm text-white" onClick={()=>{getUser(user.id, user.name, user.age)}}>Edit</button></div> */}

                <div className="w-[20%]">
                  <button
                    className="bg-red-500 p-1  rounded-sm text-white"
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-2xl text-center m-4"> No User Data</div>
        )}
      </div>
    </>
  );
}


