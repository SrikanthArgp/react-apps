import { useState } from "react";

import RenderData from "./components/RenderData";
import InputEditData from "./components/InputEditData";

export default function Home() {
  const [ID, setID] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [userData, setUserData] = useState([]);
  //const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userlist')) || []);
  const [isUpdate, setIsUpdate] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem('userlist', JSON.stringify(userData));
  // }, [userData]);

  const addData = () => {
    setUserData((prevData) => [
      { id: Math.random().toString(), name: name, age: age },
      ...prevData,
    ]);
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
        // : { id: e.id, name: e.name, age: e.age }
        :e
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
          <InputEditData  name={name} age={age} setName={setName} setAge={setAge} updateFields={updateFields} isUpdate={isUpdate} addData={addData}/>
  
          {/* data Display Section */}
          <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {userData.map((data) => {
              return (
                <RenderData id={data.id} data={data} getID={getID} deleteDocument={deleteDocument}/> 
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

