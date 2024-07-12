import { useState,useEffect } from "react";
import User from "./User";



export default function App() {
  const [ID, setID] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [userData, setuserData] = useState(JSON.parse(localStorage.getItem('userlist'))||[]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    localStorage.setItem('userlist', JSON.stringify(userData))
  
  }, [userData]);

  function adduser() {
    setuserData((prevData) => {
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

  function updateUser() {
   const selectedUser = userData.find((user) => user.id === ID);
    const updatedUserData = userData.map((user) => {
      return user.id === selectedUser.id
        ? { id: user.id, name: name, age: age }
        : user;
    });
    setuserData(updatedUserData);

    setName("");
    setAge("");
    setIsUpdate(false);
  }

  function deleteUser(id) {
    setuserData((prevData) => {
      return prevData.filter((data) => data.id !== id);
    });
  }

  return (
    <>
      <div className="bg-amber-100 min-h-screen">
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
              onClick={adduser}
            >
              ADD
            </button>
          )}
        </div>

        {/* display section */}
        {/* <div className=" flex flex-col w-[50%] mx-auto"> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 m-3">
          {userData.map((data) => {
            return (
              // <div key={data.id}>
              //   <div className="flex items-center mx-auto bg-green-100 p-2 text-xl m-2 hover:bg-green-500">
              //     <div className="w-[40%]">{data.name} </div>
              //     <div className="w-[20%]">{data.age}</div>
              //     {/* <button
              //       className="p-1 bg-blue-200"
              //       onClick={() => {
              //         getUser(data.id, data.name, data.age);
              //       }}
              //     >
              //       Edit
              //     </button> */}
              //     <FaRegEdit  size={40} className="p-1 bg-blue-200"
              //       onClick={() => {
              //         getUser(data.id, data.name, data.age);
              //       }}/>
              //     <button
              //       className="p-1 bg-red-400 m-2"
              //       onClick={() => {
              //         deleteUser(data.id);
              //       }}
              //     >
              //       Delete
              //     </button>
              //   </div>
              // </div>
              <User data={data} getUser={getUser} deleteUser={deleteUser}/>
            );
          })}
        </div>
      </div>
    </>
  );
}
