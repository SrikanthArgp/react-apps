import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTasks = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
      console.log(tasks);
    }
  };

  const deleteTasks = (index) => {
    const updatedList = [...tasks];
    console.log("Automatic...");
    // delete updatedList[index];
    updatedList.splice(index, 1);
    setTasks(updatedList);
  };

  return (
     <div>
      <div className=" flex flex-col items-center min-w-full">
        {/* <div className=""> */}
        <h1 className=" text-4xl mx-auto font-bold">Simple Todo App</h1>
        <div className="p-6 mx-auto">
          <input
            className=" bg-slate-100 rounded-md p-4 m-4"
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            placeholder="Create a new todo"
            maxLength={30}
          />
          <button
            onClick={addTasks}
            className=" bg-green-500 text-white p-3 mt-3 rounded-md font-bold hover:bg-green-600"
          >
            Add Task
          </button>
        </div>
      </div>
      <div class="bg-white w-[50%] mx-auto p-5">
        {tasks?.length > 0 ? (
          <div>
            {tasks.map((task, index) => (
              <div
                className=" flex items-center justify-between bg-slate-100  m-4
                    ml-0 py-4 p-2 pr-4 rounded-md"
                key={index}
              >
                <div className=" font-semibold pr-10 w-[80%]">{task}</div>
                <button
                  onClick={() => {
                    deleteTasks(index);
                  }}
                  className=" bg-red-500 text-white  p-2 mx-1 rounded-md font-bold hover:bg-red-600 "
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div class="text-center">
            <p>No Task Found</p>
          </div>
        )}
      </div>
     </div>
  );
};

export default App;
