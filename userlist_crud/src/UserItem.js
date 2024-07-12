import React from 'react'
import { FaEdit } from "react-icons/fa";

function UserItem(props) {

    const { data, getUser, deleteUser}=props

  return (
   <div key={data.id}>
                <div className="flex items-center mx-auto bg-green-100 p-2 text-xl m-2 hover:bg-green-500">
                  <div className="w-[40%]">{data.name} </div>
                  <div className="w-[20%]">{data.age}</div>
            
                  <FaEdit  size={80}
                     className="p-2 hover:scale-110 duration-200 m-2"
                     onClick={() => {
                       getUser(data.id, data.name, data.age);
                     }}
                  />
                  <button
                    className="p-2 bg-red-300"
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

export default UserItem
