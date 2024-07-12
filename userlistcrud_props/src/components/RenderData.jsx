import React from 'react'
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

function RenderData(props) {
    // let data = props.data
    // let getID = props.getID
    // let deleteDocument = props.deleteDocument
    
    //object destructuring 
    const {data, getID, deleteDocument} =props
    
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
          <FaTrash
            className="w-1/10 hover:bg-red-400 text-xl  p-1 rounded
            transition duration-500 ease-in-out"
            onClick={() => deleteDocument(data.id)}
          />
    </div>
      );
    }


export default RenderData