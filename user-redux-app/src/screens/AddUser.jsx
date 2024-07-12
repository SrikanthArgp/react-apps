import React from "react";
import { useDispatch } from "react-redux"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { UsersContext} from "../store/userContext";
import { addUser } from "../store/userSlice"

function AddUSer() {

  const [name, setName] = useState("");
   const [age, setAge] = useState(null);

   //const {dispatch }= useContext(UsersContext);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   function handleAddUser() {
  
    dispatch(addUser({id: Math.random().toString(),name: name, age:age}))
    setName("");
    setAge("");
    navigate('/')
  }
    
  //Object Destructuring
 // const { name, age, setName, setAge, updateFields, addData, isUpdate } = props;

  return (
    <div>
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
          <button
            className="bg-sky-400 text-white w-[30%] sm:mt-5 md:mt-0 h-[35px] mx-auto rounded-md py-0 md:w-[30%] -translate-y-1 hover:bg-sky-800 transition duration-500 ease-in-out"
            onClick={handleAddUser}
          >
            SUBMIT
          </button>
      </div>
    </div>
  );
}

export default AddUSer;
