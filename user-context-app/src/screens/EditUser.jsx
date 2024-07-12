import React from 'react'
import { useState,useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { UsersContext} from "../store/userContext";

function EditUser() {

  //Object Destructuring
  //const { name, age, setName, setAge, updateFields, addData, isUpdate } = props;
  
  const params = useParams();
  const navigate = useNavigate();
  const usersCtx = useContext(UsersContext);
  //const {userstate, dispacth} = useContext(UsersContext);
  const users = usersCtx.usersState;
  const dispatch = usersCtx.dispatch
  const existingUser = users.find(user => user.id === params.id);
  const [name, setName] = useState(existingUser.name);
  const [age, setAge] = useState(existingUser.age);

  const editUser = () => {

    dispatch({ type: "UPDATE", payload: { id: params.id, name: name, age:age } });
    setName("");
    setAge("");
    navigate('/');
  }
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
        {/* button Section  */}
        {/* {isUpdate ? ( */}
          <button
            className="bg-cyan-400 text-white w-[30%] h-[35px] mx-auto rounded-md py-0 md:w-[30%]
      hover:bg-cyan-800 transition duration-500 ease-in-out"
            onClick={editUser}
          >
            UPDATE
          </button>
      </div>
    </div>
  );
}

export default EditUser
