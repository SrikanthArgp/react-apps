import React from 'react'

function InputDemo(pro) {

    const {name, setName, age, setAge, addUser, isUpdate, updateUser} =pro

  return (
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

          {/* <button className="bg-blue-400 m-2 p-2 rounded-md hover:bg-blue-600 hover:shadow-lg text-white" onClick={addUser}>
      ADD
    </button> */}
        </div>
  )
}

export default InputDemo
