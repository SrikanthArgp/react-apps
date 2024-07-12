import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
// import { UsersContext } from "../store/userContext";
// import { useContext } from "react";
import { deleteUser } from "../store/userSlice";

function UserList() {
  //object destructuring
  //const { data, getID, deleteDocument } = props;
  //const { usersState, dispatch } = useContext(UsersContext);

  const dispatch = useDispatch();
  const usersState = useSelector(store => store.users);

  const handleDeleteUser = (id) => {
    dispatch(deleteUser({id }));
  };

  return (
    <div>
      <Link to="/add-user">
        <div className="flex items-center mx-auto bg-sky-400 text-white w-max px-10 h-[35px] rounded-md hover:bg-sky-800 transition duration-500 ease-in-out">
          ADD
        </div>
      </Link>
      <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {usersState.length == 0 ? (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No User
          </p>
        ) : (
          usersState.map((data) => (
            <div
              key={data.id}
              className="flex justify-between items-center bg-green-200 rounded-md w-4/5 mx-auto p-2 mt-3 mb-1
         hover:bg-green-400 transition duration-500 ease-in-out "
            >
              <p className="w-2/5">{data.name}</p>
              <p className="w-1/5">{data.age}</p>
              <Link to={`edit-user/${data.id}`}>
                <MdEdit
                  className="w-1/10 hover:bg-sky-600 text-2xl p-1 rounded 
            transition duration-500 ease-in-out"
                />
              </Link>
              <FaTrash
                className="w-1/10 hover:bg-red-400 text-xl  p-1 rounded
            transition duration-500 ease-in-out"
                onClick={() => handleDeleteUser(data.id)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserList;
