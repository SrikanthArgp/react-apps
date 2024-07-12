import { useState,useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
//import { AiFillDelete } from "react-icons/ai";

export default function Home() {
  const [ID, setID] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  //const [userData, setUserData] = useState([]);
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userlist')) || []);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    localStorage.setItem('userlist', JSON.stringify(userData));
  }, [userData]);

  const addData = () => {
    setUserData((prevData) => { return [
      { id: Math.random().toString(), name: name, age: age },
      ...prevData,
    ]});
    setAge("");
    setName("");
  };

  const getID = (id, name, age) => {
    setID(id);
    setName(name);
    setAge(age);
    setIsUpdate(true);
  };

  const updateFields = () => {
    const selectedItem = userData.find((item) => item.id === ID);
    const updateItem = userData.map((e) =>
      e.id === selectedItem.id
        ? (e = {
            id: e.id,
            name: name,
            age: age,
          })
        : // : { id: e.id, name: e.name, age: e.age }
          e
    );
    setUserData(updateItem);
    setName("");
    setAge("");
    setIsUpdate(false);
    console.log(userData);
  };

  const deleteDocument = (id) => {
    setUserData((prevData) => {
      return userData.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <main>
        {/* Heading Title Section */}
        <div className="bg-amber-100 h-screen max-h-full">
          <h1 className="text-green-500   text-center text-4xl">
            First React CRUD App
          </h1>
          <div className="bg-gray-200 m-4 p-2 bg-center w-max border-orange-500 border-2 rounded-md  mx-auto text-2xl mb-4 text-red-900 text-center">
            <p>Get started</p>
          </div>
          {/* Input Section */}
          <div className="flex flex-col w-[50%] mx-auto  md:flex-row md:justify-center md:items-center">
            <input
              placeholder="Name"
              className="mb-2 mr-1 p-1 border-2 w-[100%] rounded-md border-red-300 md:w-[50%]"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              placeholder="Age"
              className="mb-2 mr-4 p-1 border-2 w-[100%] rounded-md border-red-300 md:w-[20%]"
              type="number"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
            {/* button Section  Conditional Rendering*/}
            {isUpdate ? (
              <button
                className="bg-cyan-400 text-white w-[30%] h-[35px] mx-auto rounded-md py-0 md:w-[30%]
              hover:bg-cyan-800 transition duration-500 ease-in-out"
                onClick={updateFields}
              >
                UPDATE
              </button>
            ) : (
              <button
                className="bg-sky-400 text-white w-[30%] h-[35px] mx-auto rounded-md py-0 md:w-[30%] -translate-y-1 hover:bg-sky-800 transition duration-500 ease-in-out"
                onClick={addData}
              >
                ADD
              </button>
            )}
          </div>
          {/* data Display Section */}
          <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {userData.map((data) => {
              return (
                <div
                  key={data.id}
                  className="flex justify-between items-center bg-green-200 rounded-md w-4/5 mx-auto p-2 mt-3 mb-1
                 hover:bg-green-400 transition duration-500 ease-in-out "
                >
                  <p className="w-2/5">{data.name}</p>
                  <p className="w-1/5">{data.age}</p>
                  <MdEdit
                    className="w-1/10 hover:bg-sky-600 text-2xl p-1 rounded 
                    transition duration-500 ease-in-out"
                    onClick={() => {
                      //setIsUpdate(true)
                      getID(data.id, data.name, data.age);
                    }}
                  />
{/* <AiFillDelete /> */}

                  <FaTrash
                    className="w-1/10 hover:bg-red-400 text-xl  p-1 rounded
                    transition duration-500 ease-in-out"
                    onClick={() => {
                      deleteDocument(data.id);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
