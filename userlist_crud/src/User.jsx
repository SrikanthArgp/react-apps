import React from 'react'
import { FaRegEdit } from "react-icons/fa";

function User(props) {
    //object destructuring
    const { data, getUser, deleteUser} = props

  return (
    <div key={data.id}>
                <div className="flex items-center mx-auto bg-green-100 p-2 text-xl m-2 hover:bg-green-500">
                  <div className="w-[40%]">{data.name} </div>
                  <div className="w-[20%]">{data.age}</div>
                  {/* <button
                    className="p-1 bg-blue-200"
                    onClick={() => {
                      getUser(data.id, data.name, data.age);
                    }}
                  >
                    Edit
                  </button> */}
                  <FaRegEdit  size={40} className="p-1 bg-blue-200"
                    onClick={() => {
                      getUser(data.id, data.name, data.age);
                    }}/>
                  <button
                    className="p-1 bg-red-400 m-2"
                    onClick={() => {
                      deleteUser(data.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
  )
}

export default User
