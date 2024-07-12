import React from 'react'

function InputEditData(props) {

    // let name = props.name
    // let age = props.age
    // let setName = props.setName
    // let setAge = props.setAge
    // let updateFields = props.updateFields
    // let addData = props.addData
    // let isUpdate = props.isUpdate

    //Object Destructuring
    const { name, age, setName, setAge, updateFields, addData, isUpdate } = props;
    
  return (
    <div><div className="flex flex-col w-[50%] mx-auto  md:flex-row md:justify-center md:items-center">
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
  </div></div>
  )
}

export default InputEditData